import { gql } from "@apollo/client";

export const queries = {};

queries.GET_USERS = gql`
query {
  users {
    avatar_url
    created_at
    display_name
    id
    updated_at
    accounts {
      account_number
      balance {
        amount
      }
    }
    account {
      active
      default_role
    }
  }
}
`;

queries.GET_SERVICES = gql`
  query {
  services {
    id
    name
    created_at
    price
    service_form
    updated_at
  }
}
`;