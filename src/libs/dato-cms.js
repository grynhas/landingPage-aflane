import { GraphQLClient } from "graphql-request";

const API_URL = 'https://graphql.datocms.com/'
const TOKEN = process.env.TOKEN_SERVERLESS

export function request({ query, variables }) {
  const endpoint = API_URL;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${TOKEN}`
    }
  });
  return client.request(query, variables);
}