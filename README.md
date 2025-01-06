# Experimental Starter Project: Drizzle ORM, GraphQL, and Codegen Integration (WIP)

This project is an experimental starter template designed to integrate the following technologies:

- **Drizzle ORM** (PostgreSQL) – A lightweight and modern ORM for TypeScript and JavaScript.
- **GraphQL** – A flexible query language for APIs with automatic schema generation.
- **GraphQL Code Generator (Codegen)** – A powerful tool for generating TypeScript SDKs and other assets from GraphQL schemas and operations.

The primary goal of this project is to explore a **Code-First Development Workflow**, where:

1. **Database schema** is defined using Drizzle ORM.
2. **GraphQL schema** is automatically generated based on the database schema.
3. **GraphQL operations and TypeScript SDKs** are generated using GraphQL Codegen to enable seamless integration with the created API.

This project aims to simplify the process of building scalable, type-safe applications by leveraging modern tooling and best practices in full-stack development.

---

## Key Features

- **Code-First Database Design:** Use Drizzle ORM to define and manage PostgreSQL schemas programmatically.
- **Automatic GraphQL Schema Generation:** Leverage `drizzle-graphql` to automatically build GraphQL schemas based on Drizzle ORM definitions.
- **Dynamic Operation Generation:** Dynamically generate GraphQL queries and mutations from the schema.
- **Type-Safe SDKs:** Utilize GraphQL Codegen to create TypeScript-based SDKs for interacting with the API.
- **Scalability:** A modular and extensible architecture for building robust applications.

---

## Technology Stack

- **Drizzle ORM:** A modern, lightweight ORM for TypeScript with strong type safety.
- **PostgreSQL:** A powerful, open-source relational database.
- **GraphQL Yoga:** A modern GraphQL server framework.
- **GraphQL Codegen:** A toolchain for generating TypeScript types, operations, and SDKs.
- **Node.js:** A runtime for building scalable backend services.

---

## What is the purpouse?

This starter project was created to:

1. Experiment with the **Code-First Approach** to API development.
2. Explore seamless integration between database layers (Drizzle ORM) and API layers (GraphQL).
3. Enable automated client SDK generation for streamlined frontend-backend integration.
4. Serve as a reference for building future projects using a similar stack.

---

## Main problems at the moment?

I am still trying to figure out how to:

1. Generate GraphQL operations documents in reliable way. I am currently using simple script `src/scripts/gen-operations.ts` to generate `*.graphql` file required for specific codegen plugins. It seems to work, but was created just to have something. Maybe there is some ready tools for that?

