import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-operations",
        "typescript-document-nodes",
        "typescript-react-query",
        "time",
      ],
      config: {
        format: "DD.MM.YY",
        message: "The file generated on: ",
        legacyMode: true,
      },
    },
    "./src/generated/schema.graphql": {
      plugins: ["schema-ast", "time"],
      config: {
        includeDirectives: true,
        includeIntrospectionTypes: true,
        format: "DD.MM.YY",
        message: "The file generated on: ",
      },
    },
  },
};

export default config;
