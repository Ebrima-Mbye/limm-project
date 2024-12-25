// 25-12-24, 09:13, boys' new house

export default function Page() {
  return (
    <div className="flex justify-center items-center fixed top-0 h-screen w-[100vw] z-[1000] bg-gray-800">
      <div
        className="w-[200px] h-[200px] rounded-[10px] shadow-[16px_16px_20px_#0000000c] relative overflow-hidden
      before:absolute before:inset-[-50%] before:bg-custom-conic before:animate-spin-slow
      "
      >
        <div
          className="absolute border-gray-700 border
        flex justify-center align-middle inset-[5px]
        rounded-[10px] px-4 bg-gray-800 shadow-[16px_16px_20px_#0000000c_inset]"
        >
          <p
            className="bg-clip-text
          bg-gradient-to-r from-red-400 via-yellow-400 to-green-400
          text-3xl flex justify-center items-center text-transparent
          "
          >
            Tailwindcss
          </p>
        </div>
      </div>
    </div>
  );
}
