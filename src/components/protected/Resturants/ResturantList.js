import { ResturantItem, Dropdown } from "../..";

const ResturantList = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg px-5 py-6 boxShadow space-y-4">
      <div className="flex justify-between">
        <h1 className="font-bold">Retaurant (17)</h1>

        <div className="w-48">
            <h3 className="text-[#727481] text-sm mb-1">Rows per page</h3>
          <Dropdown
            updateDropDown={() => {}}
            classes={`w-full `}
            value={"10"}
            dropdownValues={["1", "2", "3", "4", "5"]}
          />
        </div>
      </div>

      <div className="bg-[#EFF3F7] rounded-lg px-4 py-4 space-y-3">
        <ResturantItem />
      </div>
    </div>
  );
};

export default ResturantList;
