export default function Overlay({ mobileVerify, emailVerify }) {
  return (
    <div className="w-screen h-full  bg-black bg-opacity-25 backdrop-blur-sm absolute z-10">
      <div className=" w-[486px] mt-[20%] relative mx-auto">
        <div className="rounded-lg py-2 px-4 bg-white flex justify-between items-center text-black ">
          <p>Verify your email</p>
          <button
            type="button"
            className="bg-gradient rounded-md py-2 px-4"
            onClick={() => emailVerify()}
          >
            Verify
          </button>
        </div>
        <div className="rounded-lg py-2 px-4 bg-white flex justify-between items-center text-black mt-5 ">
          <p>Verify your Mobile</p>
          <button
            type="button"
            className="bg-gradient rounded-md py-2 px-4"
            onClick={() => mobileVerify()}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
