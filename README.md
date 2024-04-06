

# Bucket Templates

This repo contains all the schemas used in the bucket application which restructures unordered text into a concise and structured schema.

## Available templates


### used_article [3391288207]

A schema to save product offerings from pages like Craigslist or eBay

<details>
<summary>Open</summary>

### json definition

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "the name of the product"
    },
    "description": {
      "type": "string",
      "description": "a description, just use the one from the original text"
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "a list of max 10 relevant keywords or tags that describe the product"
    },
    "price": {
      "type": "number",
      "description": "the price of the product"
    },
    "price_evaluation": {
      "type": "string",
      "enum": [
        "high",
        "ok",
        "low"
      ],
      "description": "an estimation whether the price is justified for the product based on usage and the overall market"
    }
  },
  "required": [
    "title",
    "description",
    "keywords",
    "price",
    "price_evaluation"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>


### car [3160535389]

A schema to save car models

<details>
<summary>Open</summary>

### json definition

```json
{
  "type": "object",
  "properties": {
    "brand": {
      "type": "string",
      "description": "the manufacturer"
    },
    "model": {
      "type": "string",
      "description": "the model name of the car"
    },
    "engine": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "electric",
            "gasoline",
            "diesel",
            "other"
          ]
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "a list of max 10 keywords like 'sportscar', 'sedan', 'offroad' that could be helpful when searching"
    },
    "price": {
      "type": "object",
      "properties": {
        "value": {
          "type": "number"
        },
        "unit": {
          "type": "string",
          "enum": [
            "usd",
            "eur"
          ]
        }
      },
      "required": [
        "value",
        "unit"
      ],
      "additionalProperties": false,
      "description": "the price of the car in euros"
    }
  },
  "required": [
    "brand",
    "model",
    "engine",
    "keywords",
    "price"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>


### recipe [3287171870]

A schema to save recipes including the ingredients and individual steps

<details>
<summary>Open</summary>

### json definition

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "the title of the recipe"
    },
    "description": {
      "type": "string",
      "description": "a description, just use the one from the original text"
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "a list of max 10 keywords like 'vegan', 'beef', 'vegetarian', 'summer' that could be helpful when searching. extract them from the recipe"
    },
    "ingredients": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "quantity": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "quantity"
        ],
        "additionalProperties": false
      }
    },
    "steps": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "title",
    "description",
    "keywords",
    "ingredients",
    "steps"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>


### research paper [2898017198]

A schema to save research paper, a short abstract and the authors

<details>
<summary>Open</summary>

### json definition

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "the title of the paper"
    },
    "subTitle": {
      "type": "string",
      "description": "the sub-title of the paper"
    },
    "abstract": {
      "type": "string",
      "description": "a short abstract outlining the research target and the finndings in 100 words max"
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "a list of max 10 keywords like 'cell-biology', 'quantum-physics', 'social studies', 'mathematics' that would be helpful when searching. extract them from the paper"
    },
    "authors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "quantity": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "quantity"
        ],
        "additionalProperties": false
      },
      "description": "the authors of the research paper"
    }
  },
  "required": [
    "title",
    "subTitle",
    "abstract",
    "keywords",
    "authors"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

  