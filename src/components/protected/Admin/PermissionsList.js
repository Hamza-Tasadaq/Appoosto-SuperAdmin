import PermissionItem from "./PermissionItem";

const PermissionsList = ({ queryData }) => {
  return (
    <div className="space-y-2">
      {queryData.getPermission.responscedata.permissions.map(
        (permissionData, index) => (
          <PermissionItem key={index + 1} permissionData={permissionData} />
        )
      )}
    </div>
  );
};

export default PermissionsList;
