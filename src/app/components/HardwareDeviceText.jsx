export default function HardwareDeviceText({ device }) {
  return (
    <div className="min-h-full border-gray-100 border flex-1 rounded-md p-4">
      <p className="hidden text-2xl font-bold text-[#325bb7]">{device.name}</p>
      <p className="my-2 text-[19px]">{device.description}</p>
      <hr className="mb-3 mt-2" />

      {device.details.map((detail, index) => (
        <div key={index}>
          <p className="mb-1 mt-4 text-xl font-medium">{detail.heading}</p>
          <p className="my-2 font-light text-gray-500">{detail.text}</p>
        </div>
      ))}
      <div className="mt-10 flex items-center gap-3">
        <button className="rounded-full bg-[#006df0] px-4 py-2 text-white">
          Order now
        </button>
        <p>
          for <span className="text-xl font-medium">{device.price}</span>
        </p>
      </div>
    </div>
  );
}
