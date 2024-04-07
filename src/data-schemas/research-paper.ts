import { z } from "zod";
import { SchemaDefinition } from "../types";
import { definitionBase } from "../zod-schemas";

const researchPaper: SchemaDefinition = {
  title: "research paper",
  description:
    "A schema to save research paper, a short abstract and the authors",
  typeDefinition: definitionBase.extend({
    abstract: z
      .string()
      .describe(
        "a short abstract outlining the research target and the finndings in 100 words max"
      ),
    keywords: z
      .array(z.string())
      .describe(
        "a list of max 10 keywords like 'cell-biology', 'quantum-physics', 'social studies', 'mathematics' that would be helpful when searching. extract them from the paper"
      ),
    authors: z
      .array(z.object({ name: z.string(), quantity: z.string() }))
      .describe("the authors of the research paper"),
  }),
};

export type TypeDefinition = z.infer<typeof researchPaper.typeDefinition>;

export default researchPaper;
