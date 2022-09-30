import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PLANS } from "../../../graphQl";
import PlanItem from "./PlanItem";
import { Loading, Pagination } from "../../";

const PlansList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const {
    loading: plansLoading,
    error: plansError,
    data: plansData,
  } = useQuery(GET_PLANS, {
    variables: {
      page: page,
      size: 10,
    },
  });

  // Update State once the response is received
  useEffect(() => {
    if (plansData) {
      setCurrentPage(plansData?.getPlan?.responscedata.currentPage);
      setTotalPages(plansData?.getPlan?.responscedata.totalPages);
    }
  }, [plansData]);

  if (plansLoading) {
    return <Loading />;
  }

  if (plansError) {
    return (
      <div className="flex justify-center">
        <h1 className=" text-[#D85C27] font-bold text-2xl">Not Authorized</h1>
      </div>
    );
  }

  return (
    <div>
      {plansData?.getPlan && (
        <div className="space-y-3">
          {plansData.getPlan?.responscedata?.plans.map((planData) => (
            <PlanItem key={planData.id} data={planData} />
          ))}
          <Pagination
            setPage={setPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default PlansList;
