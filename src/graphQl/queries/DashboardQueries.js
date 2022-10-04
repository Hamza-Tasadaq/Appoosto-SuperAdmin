import { gql } from "@apollo/client";

// To get Dashboard data
export const DASHBOARD_DATA = gql`
  query dashBoardQuery {
    dashBoardQuery {
      message
      responscedata {
        topBrowsers {
          name
          count
        }
        topLocations {
          name
          count
        }
        topPlatForms {
          name
          count
        }
      }
    }
  }
`;
