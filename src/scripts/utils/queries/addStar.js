export default `
  mutation ($repositoryId: ID!) {
    addStar(input: {starrableId: $repositoryId}) {
      starrable {
        viewerHasStarred
      }
    }
  }
`;
