import gql from 'graphql-tag';

export default gql`
  {
    viewer {
      login
      name
    }
  }
`;
