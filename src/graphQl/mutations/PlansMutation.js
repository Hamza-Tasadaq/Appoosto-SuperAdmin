import { gql } from "@apollo/client";

// Plans Mutation

// Create Plan
export const CREATE_PLAN = gql`
  mutation createPlan(
    $enabled: Boolean!
    $name: String!
    $description: String
    $trial: Boolean
    $trial_days: Int
    $hidden: Boolean
    $is_free: Boolean!
    $isDefault: Boolean!
    $price: Float!
    $interval_count: Int!
    $planType: planType!
    $kitchen_app: Boolean
    $waiter_app: Boolean
    $pos_app: Boolean
    $products: Int!
    $users: Int!
    $languages: Int!
    $menu: Int!
    $dine_in: Boolean
    $booking: Boolean
    $delivery: Boolean
    $take_away: Boolean
  ) {
    createPlan(
      plan: {
        enabled: $enabled
        name: $name
        description: $description
        trial: $trial
        trial_days: $trial_days
        hidden: $hidden
        is_free: $is_free
        isDefault: $isDefault
        price: $price
        interval_count: $interval_count
        planType: $planType
        kitchen_app: $kitchen_app
        waiter_app: $waiter_app
        pos_app: $pos_app
        products: $products
        users: $users
        languages: $languages
        menu: $menu
        dine_in: $dine_in
        booking: $booking
        delivery: $delivery
        take_away: $take_away
      }
    )
  }
`;
