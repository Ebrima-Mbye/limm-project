export default function Page() {
  return (
    <div className="mt-[1000px] flex justify-between items-start gap-8 border-l border-gray-300 pl-8">
      {/* Left Column */}
      <div className="w-1/2">
        <h2 className="text-xl font-semibold">
          No more juggling between different systems
        </h2>
        <p className="mt-2 text-gray-600">
          Handle every aspect of your business, from processing payments and
          managing stock to overseeing staff and handling salaries.
        </p>
      </div>

      {/* Divider */}
      <div className="h-auto w-[1px] bg-gray-300"></div>

      {/* Right Column */}
      <div className="w-1/2">
        <h2 className="text-xl font-semibold">Achieve financial clarity</h2>
        <p className="mt-2 text-gray-600">
          Take the stress out of accounting with our comprehensive financial
          tools. Easily track your sales, monitor business data, and manage your
          accounting—all in one place.
        </p>
      </div>
    </div>
  );
}
