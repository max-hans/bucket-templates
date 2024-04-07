

# Bucket Templates

This repo contains all the schemas used in the bucket application which restructures unordered text into a concise and structured schema.

## Available templates


### used_article [207022556]

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
      "minLength": 5,
      "maxLength": 50,
      "description": "a title for the page"
    },
    "description": {
      "type": "string",
      "minLength": 100,
      "maxLength": 300,
      "description": "a short abstract summary of the whole text provided."
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


### car [2979327469]

A schema to save car models

<details>
<summary>Open</summary>

### json definition

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "minLength": 5,
      "maxLength": 50,
      "description": "a title for the page"
    },
    "description": {
      "type": "string",
      "minLength": 100,
      "maxLength": 300,
      "description": "a short abstract summary of the whole text provided."
    },
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
    "title",
    "description",
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


### recipe [2156273812]

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
      "minLength": 5,
      "maxLength": 50,
      "description": "a title for the page"
    },
    "description": {
      "type": "string",
      "minLength": 100,
      "maxLength": 300,
      "description": "a short abstract summary of the whole text provided."
    },
    "portions": {
      "type": "number",
      "description": "the amount of portions that this recipe is calculated for"
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "a list of max 10 keywords like 'vegan', 'beef', 'vegetarian', 'summer dish' that could be helpful when searching. extract them from the recipe or make up your own based on the dish. make them all lower-case"
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
      },
      "description": "all the ingredients needed for the recipe"
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
    "portions",
    "keywords",
    "ingredients",
    "steps"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>


### research paper [4223598743]

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
      "minLength": 5,
      "maxLength": 50,
      "description": "a title for the page"
    },
    "description": {
      "type": "string",
      "minLength": 100,
      "maxLength": 300,
      "description": "a short abstract summary of the whole text provided."
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
    "description",
    "abstract",
    "keywords",
    "authors"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>


### contact [1226662651]

A schema to save contact information like adresses etc

<details>
<summary>Open</summary>

### json definition

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "minLength": 5,
      "maxLength": 50,
      "description": "a title for the page"
    },
    "description": {
      "type": "string",
      "minLength": 100,
      "maxLength": 300,
      "description": "a short abstract summary of the whole text provided."
    },
    "email": {
      "type": "string",
      "format": "email",
      "minLength": 3,
      "maxLength": 50
    },
    "mainAdress": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string"
        },
        "houseNumber": {
          "type": "string"
        },
        "postalCode": {
          "type": "number"
        },
        "country": {
          "type": "string"
        }
      },
      "required": [
        "street",
        "houseNumber",
        "postalCode",
        "country"
      ],
      "additionalProperties": false
    },
    "additionalAdress": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string"
        },
        "houseNumber": {
          "type": "string"
        },
        "postalCode": {
          "type": "number"
        },
        "country": {
          "type": "string"
        }
      },
      "required": [
        "street",
        "houseNumber",
        "postalCode",
        "country"
      ],
      "additionalProperties": false
    },
    "phone": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "countryCode": {
            "type": "number",
            "minimum": 1,
            "maximum": 3,
            "description": "the country code of the number without leading '+' or leading zeros. usually just two digits. for germany it is '49' for example"
          },
          "cityCode": {
            "type": "number",
            "description": "the city code. for stuttgart, germany it is '0711' INCLUDING leading zeros."
          }
        },
        "required": [
          "countryCode",
          "cityCode"
        ],
        "additionalProperties": false
      }
    },
    "fax": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "countryCode": {
            "type": "number",
            "minimum": 1,
            "maximum": 3,
            "description": "the country code of the number without leading '+' or leading zeros. usually just two digits. for germany it is '49' for example"
          }
        },
        "required": [
          "countryCode"
        ],
        "additionalProperties": false
      },
      "description": "the fax number – if it exists"
    },
    "company": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "position": {
          "type": "string",
          "description": "the persons position. could be something like 'Managing Director' or 'Team Lead'"
        },
        "department": {
          "type": "string",
          "description": "the department the person works at. could for example be 'development power tools' or something like that."
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false,
      "description": "the company the person works at and details about that. leave empty if there is no information about that provided"
    }
  },
  "required": [
    "title",
    "description",
    "email",
    "mainAdress",
    "phone"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

  