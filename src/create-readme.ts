import { serializeSchema } from "./helpers";
import loadSchemas from "./schemas";
import { SerializedSchemaDefinition } from "./types";

const INTRO = `
# Bucket Templates

This repo contains all the schemas used in the bucket application which restructures unordered text into a concise and structured schema.

## Available templates
`;

export const createReadme = (schemas: SerializedSchemaDefinition[]): string => {
  const schemaDesriptions = schemas.map(
    (elem): string => `### ${elem.title} [${elem.id}]

${elem.description}

<details>
<summary>Open</summary>

### json definition

\`\`\`json
${JSON.stringify(elem.typeDefinition, null, 2)}
\`\`\`

</details>
`
  );

  return `
${INTRO}

${schemaDesriptions.join("\n\n")}
  `;
};

const schemas = (await loadSchemas()).map(serializeSchema);

const text = createReadme(schemas);

Bun.write("./README.md", text);
