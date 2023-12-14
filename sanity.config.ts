import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemas } from "./sanity/schemas/schemas";

const config = defineConfig({
  projectId: "mjxpl4qi",
  dataset: "production",
  title: "Jour365 Backend",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
