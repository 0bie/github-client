export default `
  mutation ($repositoryId: ID!) {
    removeStar(input: {starrableId: $repositoryId}) {
      starrable {
        viewerHasStarred
      }
    }
  }
`;
