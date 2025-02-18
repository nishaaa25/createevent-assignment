import FieldBox from "./FieldBox";
import UserIcon from "../../assets/user-icon.svg";

export default function EventDetails() {
  return (
    <div className="event-details flex flex-col">
      <h4 className="text-2xl font-medium">Event Details</h4>
      <div className="w-full flex justify-between items-start gap-[74px] relative py-10">
        <FieldBox
          title="Event Name"
          placeholder="Event Name"
          descText="Event name limit to 16 letters"
          icon={UserIcon}
        />
        <div className="event-category field-box">
          <label className="text-lg">Event Category</label>
          <div className="input-field relative">
            <select name="category" id="category">
              <option value="default">Select Category</option>
              <option value="dance">Dance</option>
              <option value="travel">Travel</option>
              <option value="music">Music</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
