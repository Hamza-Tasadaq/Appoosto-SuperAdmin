import { useEffect, useState, memo } from "react";
import { useQuery } from "@apollo/client";
import Pagination from "../../commons/Pagination";
import PermissionItem from "./PermissionItem";
import { GET_PERMISSIONS } from "../../../graphQl";
import Loading from "../../commons/Loading";

const PermissionsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const {
    loading: permissionsLoading,
    error: permissionsError,
    data: permissionsData,
  } = useQuery(GET_PERMISSIONS, {
    variables: {
      page: page,
      size: 10,
    },
  });

  // Update State once the response is received
  useEffect(() => {
    if (permissionsData) {
      setCurrentPage(permissionsData?.getPermission?.responscedata.currentPage);
      setTotalPages(permissionsData?.getPermission?.responscedata.totalPages);
    }
  }, [permissionsData]);

  if (permissionsLoading) {
    return <Loading />;
  }

  return (
    <>
      {permissionsError && (
        <div className="flex justify-center">
          <h1 className=" text-[#D85C27] font-bold text-2xl">Not Authorized</h1>
        </div>
      )}
      {permissionsData.getPermission && (
        <div>
          <div className="space-y-2">
            {permissionsData.getPermission.responscedata?.permissions.map(
              (permissionData) => (
                <PermissionItem
                  key={permissionData.id}
                  permissionData={permissionData}
                />
              )
            )}
          </div>
          <Pagination
            setPage={setPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
};

export default memo(PermissionsList);
