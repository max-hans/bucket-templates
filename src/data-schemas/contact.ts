import { z } from "zod";
import { SchemaDefinition } from "../types";
import { definitionBase } from "../zod-schemas";

const contact: SchemaDefinition = {
  title: "contact",
  description: "A schema to save contact information like adresses etc",
  typeDefinition: definitionBase.extend({
    email: z.string().email().min(3).max(50),
    mainAdress: z.object({
      street: z.string(),
      houseNumber: z.string(),
      postalCode: z.number(),
      country: z.string(),
    }),
    additionalAdress: z.optional(
      z.object({
        street: z.string(),
        houseNumber: z.string(),
        postalCode: z.number(),
        country: z.string(),
      })
    ),
    phone: z.array(
      z.object({
        countryCode: z
          .number()
          .min(1)
          .max(3)
          .describe(
            "the country code of the number without leading '+' or leading zeros. usually just two digits. for germany it is '49' for example"
          ),
        cityCode: z
          .number()
          .describe(
            "the city code. for stuttgart, germany it is '0711' INCLUDING leading zeros."
          ),
      })
    ),
    fax: z
      .optional(
        z.array(
          z.object({
            countryCode: z
              .number()
              .min(1)
              .max(3)
              .describe(
                "the country code of the number without leading '+' or leading zeros. usually just two digits. for germany it is '49' for example"
              ),
          })
        )
      )
      .describe("the fax number – if it exists"),
    company: z
      .optional(
        z.object({
          name: z.string(),
          position: z
            .optional(z.string())
            .describe(
              "the persons position. could be something like 'Managing Director' or 'Team Lead'"
            ),
          department: z
            .optional(z.string())
            .describe(
              "the department the person works at. could for example be 'development power tools' or something like that."
            ),
        })
      )
      .describe(
        "the company the person works at and details about that. leave empty if there is no information about that provided"
      ),
    birthday: z.optional(
      z.date().describe("the person's birthday. only fill out if provided")
    ),
  }),
};

export type TypeDefinition = z.infer<typeof contact.typeDefinition>;

export default contact;
