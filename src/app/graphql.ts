const { gql } = require('apollo-server');


export const Get_HEADERS_DATA = gql`
    query Headers {
      headers {
        email
        headerName
      }
    }
  `
;
