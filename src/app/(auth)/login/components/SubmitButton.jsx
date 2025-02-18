"use client";

export default function SubmitButton({ loading }) {
  // Accept loading prop
  return (
    <button
      type="submit" // No need for onClick here, form submission handles it
      disabled={loading} // Disable button while loading
      className="w-full rounded-[12px] bg-[#356BB7] py-2 text-white transition-colors duration-300 hover:bg-blue-600"
    >
      {loading ? "Logging in..." : "Login"} {/* Show loading message */}
    </button>
  );
}
