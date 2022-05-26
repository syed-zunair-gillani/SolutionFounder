export const GRAPHQL_API = "https://solutionfounder.com/graphql";

export const GRAPG_QUERRY = `
allSuccessStories(first: 40) {
    edges {
      node {
        title
        uri
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        successStoryExtra {
          shortInfo
        }
      }
    }
  }
`;
