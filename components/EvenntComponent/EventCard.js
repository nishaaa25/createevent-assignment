import FieldBox from "./FieldBox";
import FileUpload from "./file-upload";
import GalleryIcon from "../../assets/gallery-icon.svg";
import Image from "next/image";
import VideoIcon from "../../assets/video-play.svg";
import ExportIcon from "../../assets/export.svg";
import TimerIcon from "../../assets/timer.svg";
import BoltIcon from "../../assets/bolt-icon.svg";
import ArrowUpIcon from "../../assets/arrow-up.svg";

export default function EventCard() {
  return (
    <div className="event-details flex flex-col">
      <h4 className="text-2xl font-medium">Event Cards</h4>
      <div className="w-full flex justify-between items-start gap-16 relative pt-12 pb-10">
        <div className="event-name relative  w-1/2">
          <FileUpload
            icon={GalleryIcon}
            title="Click to upload Horizontal"
            tags={["PDF", "DOCX", "TXT"]}
            size="< 2.0 MB"
          />
          <div className="w-full relative mt-2">
            <span className="text-sm leading-6">Display title on the card</span>
          </div>
        </div>
        <div className="event-category relative w-1/2 h-[220px]">
          <div className="files-input h-full relative"></div>
        </div>
      </div>
      <div className="event-name relative  w-full mb-10">
        <FileUpload
          icon={VideoIcon}
          title="Click to upload Video"
          tags={["PDF", "DOCX", "TXT"]}
          size="< 10 SEC"
        />
        <div className="w-full relative mt-3 text-center text-gray-600 ">
          <span className="text-base leading-[20.14px] ">
            We require event images in both vertical (portrait) and horizontal
            (landscape) formats*
          </span>
        </div>
      </div>
      <div className="event-name relative  w-full">
        <FileUpload
          icon={VideoIcon}
          title="Click to upload Video"
          tags={["MDC", "MDV"]}
          size="< 30 SEC"
        />
        <div className="flex justify-end items-center w-full relative mt-2">
          <div className="flex-center gap-2 mb-16">
            <p>Card Guidelines</p>
            <Image
              src={ExportIcon}
              alt="icon"
              width={16}
              height={16}
              className="relative object-contain"
            />
          </div>
        </div>
      </div>
      <div className="description field-box mb-6">
        <label>Event Description</label>
        <textarea
          className="w-full relative input-field h-28"
          placeholder="Event Description "
        ></textarea>
      </div>
      <div className="w-full flex justify-between items-start gap-[74px] relative mb-6">
        <FieldBox
          title="Start Date"
          placeholder="Wednesday, 1st Jan"
          icon={ArrowUpIcon}
        />
        <FieldBox
          title="End Date"
          placeholder="Wednesday, 1st Jan"
          icon={ArrowUpIcon}
        />
      </div>
      <div className="w-full flex justify-between items-start gap-[74px] relative mb-6">
        <FieldBox
          title="Registration Deadline"
          placeholder="DD/MM/YYYY"
          icon={TimerIcon}
        />
        <div className="event-category field-box">
          <label className="text-lg">Event Type</label>
          <div className="input-field relative mb-2 flex items-center gap-2">
            <Image
              src={BoltIcon}
              alt="bolt-icon"
              width={14}
              height={14}
              className="object-contain relative"
            />
            <input
              type="text"
              placeholder="Select Type"
              name="start-date"
              id="start-date"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-start gap-[74px] relative mb-6">
        <FieldBox title="Enter Venue Name" placeholder="Enter Venue" />
        <FieldBox title="Enter City" placeholder="e.g. Bangalore" />
      </div>
      <div className="w-full flex justify-between items-start gap-[74px] relative mb-6">
        <FieldBox
          title="Price per Ticket"
          placeholder="Enter Amount"
          descText="This is the standard price for your tickets*"
        />
        <FieldBox title="Total Ticket" placeholder="Enter Ticket" />
      </div>
      <div className="w-full relative">
        <span className="text-sm leading-6">
          Add Tiered Pricing Options (Optional)
        </span>
      </div>
    </div>
  );
}
