import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Loading, Pagination } from "../../index";
import { GET_SUBSCRIPTIONS } from "../../../graphQl";
import SubscriptionList from "./SubscriptionList";

const Subscription = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const {
    loading: subscriptionLoading,
    error: subscriptionError,
    data: subscriptionData,
  } = useQuery(GET_SUBSCRIPTIONS, {
    variables: {
      page: page,
      size: 10,
    },
  });

  // Update State once the response is received
  useEffect(() => {
    if (subscriptionData) {
      setCurrentPage(
        subscriptionData?.getSubscription?.responscedata.currentPage
      );
      setTotalPages(
        subscriptionData?.getSubscription?.responscedata.totalPages
      );
    }
  }, [subscriptionData]);

  if (subscriptionLoading) {
    return <Loading />;
  }

  if (subscriptionError) {
    return (
      <div className="flex justify-center">
        <h1 className=" text-[#D85C27] font-bold text-2xl">Not Authorized</h1>
      </div>
    );
  }
  return (
    <div className="bg-[#ffffff] rounded-lg px-6 py-4">
      <SubscriptionList
        subscriptionData={
          subscriptionData?.getSubscription?.responscedata.subscriptions
        }
      />
      <Pagination
        setPage={setPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Subscription;
