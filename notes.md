GraphQL allows requests for specific data, giving clients more control over what information is sent.

In a RESTful architecture the backend defines what data is available for each resource on each URL;
And the frontend always has to request all the information in a resource, even if only a part is needed.

Overfetching: a client application has to read multiple resources through multiple network requests.

GraphQL on the server-side and client-side lets the client decide which data it needs by making a single request to the server.

### Operations

GraphQL currently has 3 operations:

- Query (read)
- Mutation (write)
- Subscription (continuous read)

```js
// a GraphQL query
author(id: "7") {
  id
  name
  avatarUrl
  articles(limit: 2) {
    name
    urlSlug
  }
}

// a GraphQL query result
{
  "data": {
    "author": {
      "id": "7",
      "name": "foo",
      "avatarUrl": "https://www.",
      "articles": [
        {
          "name": "Article title 1",
          "urlSlug": "article-title-1"
        },
        {
          "name": "Article title 2",
          "urlSlug": "article-title-2"
        }
      ]
    }
  }
}
```
- In the code above, one query requests multiple resources (`author` and `articles`), called fields in GraphQL (`id`, `name`, `avatarUrl`, `articles`), and requested only a particular set of nested fields for these fields (`name`, `urlSlug` for `articles`).

- Even though the entity offers more data in its GraphQL schema (e.g description, releaseData for `articles`).

- A RESTful architecture needs at least two waterfall requests to retrieve the `author` entity and its `articles`.

- With GraphQL those requests can be made in one query, selecting only the required fields as opposed to the whole entity

### GraphQL in a Nutshell

The server application offers a GraphQL schema, where it defines all available data with its hierarchy and types, and a client application only queries the required data.

The server-side application offers all information about what is available on its side, and the client-side application asks for part of it by performing GraphQL queries, or alters part of it using GraphQL mutations.

GraphQL shifts the perspective to the client, which decides on the data it needs rather than the server.

### Advantages

#### Declarative Data Fetching:

The client selects data along with its entities with fields across relationships in one query request.

It almost acts as UI-driven data fetching. (client == UI)

GraphQL offers a great separation of concerns: a client knows about the data requirements; the server knows about the data structure and how to resolve the data from a data source (e.g database, microservice, third-party API).

#### No Overfetching:

With GraphQL, the mobile client can choose a different set of fields,so it can fetch only the information needed for what's onscreen.

### Single Source of Truth

__The GraphQL schema is the single source of truth in GraphQL applications__

It provides a central location where all available data is described.

The GraphQL schema is usually defined on the server-side, but clients can read (query) and write (mutation) data based on the schema.

The server-side application offers all information about what is available on its side, and the client-side application asks for part of it by performing GraphQL queries, or alters part of it using GraphQL mutations.

__With GraphQL, one API (single source of truth) can be used by various clients to request data from a data source.__

### Schema Stitching

Schema stitching makes it possible to create one schema out of multiple schemas.
Each microservice can have its own GraphQL endpoint, where one GraphQL API gateway consolidates all schemas into one global schema.

### GraphQL Introspection

A GraphQL introspection makes it possible to retrieve the GraphQL schema from a GraphQL API.
It can also be used to mock the GraphQL schema client-side, for testing or retrieving schemas from multiple microservices during schema stitching.

### Strongly Typed

GraphQL is a strongly typed query language because it is written in the expressive GraphQL Schema Definition Language (SDL).

### Versioning

In GraphQL there are no API versions.

It is possible to deprecate the API on a field level; Thus a client receives a deprecation warning when querying a deprecated field.

### Disadvantages

GraphQL doesn't take away performance bottlenecks when you have to access multiple fields (authors, articles, comments).

Whether the request was made in a RESTful architecture or GraphQL, the varied resources and fields still have to be retrieved from a data source.

Problems arise when a client requests too many nested fields at once.

Frontend developers are not always aware of the work a server-side application has to perform to retrieve data, so there must be a mechanism like maximum query depths, query complexity weighting, avoiding recursion, or persistent queries for stopping inefficient requests from the other side.

For caching, each GraphQL query can return different results even though it operates on the same entity.
So you need a more fine-grained cache at field level, which can be difficult to implement.

__Caching is often supported by GraphQL libraries__

### Apollo

Apollo comes with built-in features to pull all the complexity out of applications and handle the intersection between client and server applications.

Data can be read from the Apollo Client Cache by an identifier, without looking up an `article` entity or `author` entity.

Apollo is also library agnostic on the server-side, and it offers several solutions to connect with Node.js libraries.

Apollo connects client and backend applications with GraphQL, apollo-link-rest for RESTful APIs, and apollo-link-state for local state management.


There are many reasons to use Apollo and its striving ecosystem for JavaScript applications, when you want to use a GraphQL interface over a RESTful interface.

Apollo libraries are framework agnostic, so they can be used with a wide variety of frameworks on the client-side like React, Angular, Vue, and server-side applications like Express, Koa, Hapi.

### GraphQL Fundamentals
queries, mutations, pagination ...

```sh
# queries using GitHub GraphQL API

# An anonymous query

# {
#   viewer {
#     name
#     url
#   }
#   book: organization(login: "the-road-to-learn-react") {
#     ...sharedOrganizationFields
#   }
#   company: organization(login: "facebook") {
#     ...sharedOrganizationFields
#   }
# }

# A fragment can be used to abstract reusable fields

# fragment sharedOrganizationFields on Organization {
#   name
#   url
# }

# query with variable

# query ($organization: String!) {
#   organization(login: $organization) {
#     name
#     url
#   }
# }

# named query
# A named query provides a certain level of clarity
# about what you want to achieve in a declarative way

# query OrganizationForLearningReact {
#   organization(login: "the-road-to-learn-react") {
#     name
#     url
#   }
# }

# final query

# query OrganizationForLearningReact($organization: String!) {
#   organization(login: $organization) {
#     name
#     url
#   }
# }

query OrganizationForLearningReact(
  $organization: String!,
  $repository: String!,
  $withFork: Boolean!
) {
  organization(login: $organization) {
    name
    url
    repository(name: $repository) {
      name
      forkCount @include(if: $withFork)
    }
  }
}

# "Query Variables"

# {
#   "organization": "the-road-to-learn-react"
# }

{
  "organization": "the-road-to-learn-react",
	"repository": "the-road-to-learn-react-chinese",
	"withFork": true
}
```

### Terminology

Schema:
A schema defines a GraphQL API's type system. It describes the complete set of possible data (objects, fields, relationships, everything)
that a client can access.

Requests from the client are validated and executed against the schema.

A client can find information about the schema via introspection.

Field:
A field is a unit of data you can retrieve from an object.

"The GraphQL query language is basically about selecting fields on objects".

#### Resources

- https://www.prisma.io/blog/graphql-sdl-schema-definition-language-6755bcb9ce51
- https://github.com/the-road-to-graphql/react-graphql-client-library
- https://www.youtube.com/watch?v=2It9NofBWYg&feature=youtu.be -- Scaling GraphQL at Shopify - Leanne Shapton
- https://github.com/Shopify/graphql-design-tutorial/blob/master/TUTORIAL.md
- https://graphql.org/learn/schema/
- https://developer.github.com/v4/guides/intro-to-graphql/
- https://developer.github.com/v4/guides/
- https://nordicapis.com/5-potential-benefits-integrating-graphql/
- https://nordicapis.com/10-awesome-tools-and-extensions-for-graphql-apis/
