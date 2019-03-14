### Github API v4 Client

The purpose of this repository is to learn and understand how to set up a GraphQL client
using the [GitHub API](http://bitly.com/2G9bvTj)

The intent is to be able to make queries for issues, and also star/watch repositories through mutations.

Implements [React](https://bit.ly/2B7E1yR) for the view layer, using [Apollo Client](https://bit.ly/2WF1SRg)
to handle [GraphQL](https://bit.ly/2tH0L5M) queries and mutations.

### Developing

- Install [Yarn](https://bit.ly/2Td7ST9) (preferred for version locking).
- Create a GitHub Token (Reference: [https://bit.ly/2CkCgAN](https://bit.ly/2CkCgAN))
- Install project dependencies: `npm install`
- Create `.env` file and set GitHub Token: `GITHUB_TOKEN=${GITHUB_TOKEN}`
- Start the app: `npm start` (http://localhost:8080)
