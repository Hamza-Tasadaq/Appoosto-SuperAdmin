import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import SelectDropDown from "../../commons/SelectDropDown";
import Pagination from "../../commons/Pagination";
import AdminItem from "./AdminItem";
import {
  GET_ADMINS,
  GET_PAGINATION_DATA,
  GET_PERMISSIONS_ID,
} from "../../../graphQl";

const AdminsList = () => {
  const { data: paginationData } = useQuery(GET_PAGINATION_DATA, {
    variables: {
      page: 1,
      size: 1,
    },
  });
  const { data: permissionsData } = useQuery(GET_PERMISSIONS_ID, {
    variables: {
      page: 1,
      size: paginationData?.getPermission.responscedata.totalItems,
    },
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const {
    loading: adminsLoading,
    error: adminsError,
    data: adminsData,
  } = useQuery(GET_ADMINS, {
    variables: {
      page: page,
      size: 10,
    },
  });

  useEffect(() => {
    if (adminsData) {
      setCurrentPage(adminsData?.getAdmin?.responscedata.currentPage);
      setTotalPages(adminsData?.getAdmin?.responscedata.totalPages);
    }
  }, [adminsData]);

  if (adminsLoading) {
    return <div className="flex justify-center">loading...</div>;
  }

  if (adminsError) {
    return (
      <div className="flex justify-center">
        <h1 className=" text-[#D85C27] font-bold text-2xl">Not Authorized</h1>
      </div>
    );
  }

  if (!adminsData && !adminsLoading) {
    return (
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl">No Data Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#ffffff] rounded-lg w-full px-5 py-6 boxShadow space-y-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold">Admins (17)</h1>
        <div className="w-48">
          <SelectDropDown
            updateDropDown={(id) => {
              // setFormData({
              //   ...formData,
              //   permissionId: id,
              // });
            }}
            // classes={`w-full ${
            //   showErrors && formData.permissionId === "" && " border-[#D85C27]"
            // }`}
            value={"Select Permissions"}
            dropdownValues={permissionsData?.getPermission?.responscedata?.permissions?.map(
              (permissionItem) => permissionItem
            )}
          />
        </div>
      </div>

      <div className="mx-1 rounded-lg p-4  bg-[#EFF3F7] space-y-3">
        {adminsData?.getAdmin?.responscedata?.admins.map((adminData) => (
          <AdminItem key={adminData.id} adminData={adminData} />
        ))}
        <Pagination
          setPage={setPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default AdminsList;
