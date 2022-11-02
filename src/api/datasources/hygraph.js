const { GraphQLDataSource } = require('apollo-datasource-graphql');
const { gql } = require('apollo-server');

const getHeadersQuery = gql`
  {
    headers {
      email
      headerName
    }
  }
`;

class HygraphAPI extends GraphQLDataSource {
  constructor() {
    super();

    this.baseURL =
      'https://api-us-east-1.hygraph.com/v2/cl9yex50t1sjc01ujaw2s7uer/master';
  }

  async getHeaders() {
    const { data } = await this.query(getHeadersQuery);
    console.log(data)
    return data.headers;
  }
}

module.exports = HygraphAPI;
