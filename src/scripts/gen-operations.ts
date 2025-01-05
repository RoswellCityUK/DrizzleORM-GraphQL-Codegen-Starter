import {
  getIntrospectionQuery,
  buildClientSchema,
  GraphQLSchema,
  GraphQLFieldMap,
  GraphQLField,
  GraphQLInputField,
  isObjectType,
  isScalarType,
  GraphQLObjectType,
  GraphQLType,
} from "graphql";
import { writeFileSync } from "fs";
import fetch from "node-fetch";

// Step 1: Fetch the GraphQL schema via introspection
async function fetchSchema(endpoint: string): Promise<GraphQLSchema> {
  const introspectionQuery = getIntrospectionQuery();

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: introspectionQuery }),
  });

  const { data } = await response.json();
  return buildClientSchema(data);
}

// Step 2: Recursively get fields for object types
function getFieldsForType(type: GraphQLType, schema: GraphQLSchema): string {
  if (isObjectType(type)) {
    const fields = type.getFields();
    return Object.keys(fields)
      .map((fieldName) => {
        const field = fields[fieldName];
        if (isObjectType(field.type)) {
          return `${fieldName} { ${getFieldsForType(field.type, schema)} }`;
        }
        return fieldName; // Scalar fields
      })
      .join(" ");
  }
  return ""; // For scalar types, return an empty string
}

// Step 3: Generate operations dynamically
function generateOperations(schema: GraphQLSchema): string {
  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType();

  const operations: string[] = [];

  // Helper to format arguments
  const formatArgs = (args: ReadonlyArray<GraphQLInputField>) =>
    args.map((arg) => `$${arg.name}: ${arg.type}`).join(", ");

  const formatArgsUsage = (args: ReadonlyArray<GraphQLInputField>) =>
    args.map((arg) => `${arg.name}: $${arg.name}`).join(", ");

  // Generate queries
  if (queryType) {
    const fields: GraphQLFieldMap<any, any> = queryType.getFields();
    Object.keys(fields).forEach((fieldName) => {
      const field: GraphQLField<any, any> = fields[fieldName];
      const args = formatArgs(field.args);
      const argsUsage = formatArgsUsage(field.args);
      const selectionSet = getFieldsForType(field.type, schema);

      operations.push(`
  query ${fieldName}(${args}) {
    ${fieldName}(${argsUsage}) {
      ${selectionSet}
    }
  }`);
    });
  }

  // Generate mutations
  if (mutationType) {
    const fields: GraphQLFieldMap<any, any> = mutationType.getFields();
    Object.keys(fields).forEach((fieldName) => {
      const field: GraphQLField<any, any> = fields[fieldName];
      const args = formatArgs(field.args);
      const argsUsage = formatArgsUsage(field.args);
      const selectionSet = getFieldsForType(field.type, schema);

      operations.push(`
  mutation ${fieldName}(${args}) {
    ${fieldName}(${argsUsage}) {
      ${selectionSet}
    }
  }`);
    });
  }

  return operations.join("\n");
}

// Step 4: Save operations to a file
async function main() {
  const endpoint = "http://localhost:4000/graphql";
  const schema = await fetchSchema(endpoint);

  const operations = generateOperations(schema);

  // Save to a .graphql file
  writeFileSync("./src/graphql/operations.graphql", operations, "utf-8");
  console.info("Operations written to src/graphql/operations.graphql");
}

main().catch((error) => console.error(error));
