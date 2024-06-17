import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function asynchandler(req, res) {
  const { name, email, phone, message } = req.body;

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateContact($name: String!, $email: String!, $phone: String!, $message: String!) {
      createContact(
        data: {
          name: $name
          email: $email
          phone: $phone
          message: $message
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, {
      name,
      email,
      phone,
      message,
    });
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
}
