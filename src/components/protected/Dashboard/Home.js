import { LineChart, PieChart } from "../../index";
import Heading from "./Heading";

const Home = () => {
  return (
    <div className="bg-[#ffffff] rounded-lg px-5 py-6 space-y-4">
      <div className="bg-[#EFF3F7] space-y-4 flex-1 p-4 rounded-lg">
        <Heading text={"Sales value"} />
        <LineChart />
      </div>
      <div className="flex space-x-4">
        <div className="bg-[#EFF3F7] space-y-4 flex-1 p-4 rounded-lg">
          <Heading text={"Restaurants per plan"} />

          <PieChart />
        </div>
        <div className="bg-[#EFF3F7] space-y-4 flex-1 p-4 rounded-lg">
          <Heading text={"Value per plan"} />

          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
