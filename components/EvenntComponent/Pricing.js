import FieldBox from "./FieldBox";
import TimerIcon from "../../assets/timer.svg";

export default function Pricing() {
  return (
    <div className="event-pricing flex flex-col my-10 w-full">
      <div className="w-full relative ">
        <h4 className="text-2xl font-medium">Tiered Pricing Options</h4>
        <div className="w-full flex justify-between items-start gap-[74px] relative mt-10 ">
          <FieldBox title="Name" placeholder="e.g. Early Bird" />
          <FieldBox title="Price per Ticket" placeholder="Enter Amount" />
        </div>
        <div className="w-full flex justify-between items-start gap-[74px] relative mt-5">
          <FieldBox
            title="Availability Deadline"
            placeholder="DD/MM/YYYY"
            icon={TimerIcon}
          />
          <FieldBox title="Slots" placeholder="Limited Slots" />
        </div>
      </div>
      <div className="mt-8 mb-12 w-full relative flex justify-between items-center">
        <button className="custom-btn-two">+ Add More</button>
        <button className="custom-btn">Done</button>
      </div>
    </div>
  );
}
