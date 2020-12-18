import { gql } from '@apollo/client';

export const ALL_BOOKS = gql`
query {
  books{
    title
    author
  }
}
`;