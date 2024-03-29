import gql from 'graphql-tag';

export default gql`
  {
    viewer {
      repositories(
        first: 5
        orderBy: {direction: DESC, field: STARGAZERS}
      ) {
        edges {
          node {
            id
            name
            url
            descriptionHTML
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
          }
        }
      }
    }
  }
`;
