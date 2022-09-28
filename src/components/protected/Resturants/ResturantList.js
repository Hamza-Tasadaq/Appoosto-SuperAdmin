import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ResturantItem, Dropdown } from "../..";
import { GET_RESTAURANTS } from "../../../graphQl";
import { Loading } from "../../index";

const ResturantList = () => {
  const [size, setSize] = useState(10);

  const {
    data: restaurantData,
    loading: restaurantLoading,
    error: restaurantError,
  } = useQuery(GET_RESTAURANTS, {
    variables: {
      page: 1,
      size: size,
    },
  });

  if (restaurantLoading) {
    return <Loading />;
  }
  if (restaurantError) {
    console.log(restaurantError);
    return (
      <div className="flex justify-center">
        <h1 className=" text-[#D85C27] font-bold text-2xl">Something Wrong</h1>
      </div>
    );
  }
  if (!restaurantData) {
    return <div className="flex justify-center">No Data Found</div>;
  }

  return (
    <div className="bg-[#FFFFFF] rounded-lg px-5 py-6 boxShadow space-y-4">
      <div className="flex justify-between">
        <h1 className="font-bold">
          Retaurant ({restaurantData?.getRestaurants.responscedata.totalItems})
        </h1>

        <div className="w-48">
          <h3 className="text-[#727481] text-sm mb-1">Rows per page</h3>
          <Dropdown
            updateDropDown={(text) => {
              setSize(+text);
            }}
            classes={`w-full `}
            value={size}
            dropdownValues={["1", "2", "3", "4", "5"]}
          />
        </div>
      </div>

      <div className="bg-[#EFF3F7] rounded-lg px-4 py-4 space-y-3">
        {restaurantData?.getRestaurants.responscedata.restaurants.map(
          (restaurantData) => (
            <ResturantItem key={restaurantData.id} data={restaurantData} />
          )
        )}
      </div>
    </div>
  );
};

export default ResturantList;
