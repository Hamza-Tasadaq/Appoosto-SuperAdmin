import { SubscriptionItem } from "../..";

const SubscriptionList = ({ subscriptionData }) => {
  return (
    <div className="bg-[#EFF3F7] rounded-lg p-3">
      {subscriptionData.map((data) => (
        <SubscriptionItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default SubscriptionList;
