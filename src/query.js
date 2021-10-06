const connectQuery = (endCursor) => {
  return {
    query: `
query MyQuery {
  posts(where: {categoryId: 15}, first: 12, after: "${endCursor}") {
    pageInfo {
      hasNextPage
      endCursor
      startCursor
    }
    edges {
      node {
        id
        title
        content
        dateGmt
        link
        featuredImage {
          node {
            sourceUrl(size: MEDIUM)
            mediaDetails {
              height
              width
              sizes {
                height
                width
                name
              }
            }
            mediaItemUrl
            srcSet
          }
        }
        categories {
          nodes {
            categoryId
          }
        }
      }
    }
  }
}
    `,
  };
};

export default connectQuery;
