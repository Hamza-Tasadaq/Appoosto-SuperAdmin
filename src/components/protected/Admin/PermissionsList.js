import { useEffect, useState, memo } from "react";
import { useQuery } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../commons/Pagination";
import PermissionItem from "./PermissionItem";
import { GET_PERMISSIONS } from "../../../graphQl";
import { addPermissions } from "../../../app/slices/PermissionsSlice";

const PermissionsList = () => {
  const { permissions } = useSelector((state) => state.permissions);
  const dispatch = useDispatch();

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
      size: 5,
    },
  });

  // Update State once the response is received
  useEffect(() => {
    if (permissionsData) {
      // Add Data to the redux State
      dispatch(addPermissions(permissionsData.getPermission));
      setCurrentPage(permissionsData?.getPermission?.responscedata.currentPage);
      setTotalPages(permissionsData?.getPermission?.responscedata.totalPages);
    }
  }, [permissionsData, dispatch]);

  if (permissionsLoading) {
    return <div className="flex justify-center">loading...</div>;
  }

  return (
    <>
      {permissionsError && (
        <div className="flex justify-center">
          <h1 className=" text-[#D85C27] font-bold text-2xl">Not Authorized</h1>
        </div>
      )}
      {permissions && (
        <div>
          <div className="space-y-2">
            {permissions.responscedata?.permissions.map((permissionData) => (
              <PermissionItem
                key={permissionData.id}
                permissionData={permissionData}
              />
            ))}
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
