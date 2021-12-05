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
      id
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

queries.GET_ACCOUNT_SERVICES = gql`
query GetAccountServices($account_id: bigint!) {
  service_accounts (where: {account_id: {_eq: $account_id}}) {
    id
    form_data
    payment_status
		status
   	service {
      name
      price
    }
    account {
      balance {
        amount
      }
    }
    created_at
    updated_at
  }
}
`;