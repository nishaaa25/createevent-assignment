import ToggleButton from "../ToggleButton";
import FieldBox from "./FieldBox";
import UserIcon from "../../assets/user-icon.svg";
import CallingIcon from "../../assets/call-calling.svg";

export default function Contact() {
  return (
    <div className="event-details flex flex-col pb-20">
      <h4 className="text-2xl font-medium">Point of Contact</h4>
      <div className="w-full flex justify-between items-start gap-[74px] relative py-10">
        <FieldBox title="Organiser Name" placeholder="Name" icon={UserIcon} />
        <FieldBox
          title="Phone Number"
          placeholder="+91-8129440221"
          icon={CallingIcon}
        />
      </div>
      <div className="event-name field-box">
        <label className="text-lg">Terms and Conditions</label>
        <div className="input-field relative mb-10">
          <textarea
            type="text"
            placeholder={`E.g 
                * Tickets are non-refundable after 20.
                * The organizer is not liable for personal belongings during the event.
                * Participants must be 18+ years old.
                * Respect other attendees and adhere to event-specific dress codes.
                * Venue has been inspected for fire safety compliance.
                * Permits for large gatherings are secured 
                `}
            name="event-name"
            id="event-name"
            rows={8}
          ></textarea>
        </div>
        <div className="input-field relative mb-12 flex justify-between items-center">
          <p>Set Event to private</p>
          <ToggleButton />
        </div>
        <div className="w-full flex justify-end ">
          <button className="font-semibold text-lg leading-5 border py-5 px-10 bg-white bg-opacity-15 border-green-600 rounded-lg">
            Add Section
          </button>
        </div>
      </div>
    </div>
  );
}
