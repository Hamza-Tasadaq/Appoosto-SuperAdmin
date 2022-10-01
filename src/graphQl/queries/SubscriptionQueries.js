import { gql } from "@apollo/client";

export const GET_SUBSCRIPTIONS = gql`
  query getSubscription($page: Int, $size: Int) {
    getSubscription(pageinfo: { page: $page, size: $size }) {
      message
      responscedata {
        totalItems
        totalPages
        currentPage
        subscriptions {
          id
          createdAt
          paid_cash
          new_subscription
          plan {
            name
            price
            planType
          }
          user {
            username
          }
        }
      }
    }
  }
`;
