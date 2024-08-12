import { loadEnvConfig } from "@next/env";
import { Client } from "pg";

export function getClient() {
    const projectDir = process.cwd()
    loadEnvConfig(projectDir)

    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE,
        password: process.env.POSTGRES_PASSWORD,
        port: parseInt(process.env.POSTGRES_PORT!),
      });
      return client
}
