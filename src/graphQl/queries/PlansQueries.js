

//  query getPlan($page: Int, $size: Int) {
//     getPlan(pageinfo: { page: $page, size: $size }) {
//       message
//       responscedata {
//         totalItems
//         totalPages
//         currentPage
//         plans{
//           id
//           name
//           enabled
//           description
//           trial
//           trial_days
//           hidden
//           is_free
//           isDefault
//           price
//           interval_count
//           planType
//           kitchen_app
//           waiter_app
//           pos_app
//           products
//           users
//           languages
//           menu
//           dine_in
//           booking
//           delivery
//           take_away
//           ownersCount
//         }
//       }
//     }
//   }