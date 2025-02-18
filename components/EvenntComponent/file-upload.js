import Image from "next/image";

export default function FileUpload({ icon, title, tags, size }) {
  return (
    <div className="flex-center flex-col files-input h-[220px] w-full">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center cursor-pointer mb-6"
      >
        <Image
          src={icon}
          alt={icon}
          width={40}
          height={40}
          className="text-gray-400"
        />
        <p className="mt-2 text-sm text-gray-300">{title}</p>
        <input id="file-upload" type="file" className="hidden" />
      </label>

      <div className="mt-4 flex gap-2 ">
        {tags.map((tag) => {
          return (
            <button className="px-3 py-1 bg-gray-700 rounded text-xs" key={tag}>
              PDF
            </button>
          );
        })}
        <button className="px-3 py-1 border border-gray-700 rounded text-xs">
          {size}
        </button>
      </div>
    </div>
  );
}
