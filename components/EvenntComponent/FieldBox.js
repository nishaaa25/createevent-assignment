import Image from "next/image";

export default function FieldBox({ title, placeholder, descText, icon }) {
  return (
    <div className="event-name field-box">
      <label className="text-lg" htmlFor={title}>
        {title}
      </label>
      <div className="input-field flex justify-between items-center relative mb-2">
        <input type="text" placeholder={placeholder} name={title} id={title} />
        {icon && (
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="relative object-contain"
          />
        )}
      </div>
      {descText && (
        <p className="text-xs leading-[14.4px] font-semibold">{descText}</p>
      )}
    </div>
  );
}
