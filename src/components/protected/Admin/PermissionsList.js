import PermissionItem from "./PermissionItem";

const PermissionsList = ({ queryData }) => {
  console.log(queryData.getAdmin.responscedata.totalPages);
  console.log(queryData.getAdmin.responscedata.totalItems);
  
  return (
    <div className="space-y-2">
      {queryData?.getAdmin?.responscedata?.admins.map(
        ({ username, permission }, index) => (
          <PermissionItem
            key={index + 1}
            username={username}
            permission={permission}
          />
        )
      )}
    </div>
  );
};

export default PermissionsList;
