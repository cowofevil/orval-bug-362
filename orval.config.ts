import { defineConfig } from "orval";

export default defineConfig({
  "test": {
    input: {
      target: "./openapi.spec.yaml",
    },
    output: {
      mode: "tags",
      target: "./gen",
      schemas: "./gen/models",
      client: "swr",
      prettier: true,
      mock: true,
    },
  },
});
