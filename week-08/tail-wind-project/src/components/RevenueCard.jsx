import QuestionMarkCircle from "../icons/QuestionMarkCircle";
import ShevronRight from "../icons/ShevronRight";

const RevenueCard = ({ title, warning, orderCount, amount }) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <div className="text-gray-700 flex justify-center ">
        <div>{title}</div>
        <QuestionMarkCircle size={24} />
      </div>
      <div className="flex justify-between p-2">
        <div className="font-semibold text-2xl">₹ {amount}</div>
        {orderCount ? (
          <div className="flex cursor-pointer underline font-medium flex-col justify-center">
            <div className="flex">
              <div className="text-blue-custom-new">{orderCount} order(s)</div>
              <ShevronRight />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RevenueCard;
