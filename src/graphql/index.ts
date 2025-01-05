import { buildSchema } from "drizzle-graphql";
import { db } from "../db";

const { schema } = buildSchema(db);

export default schema;
