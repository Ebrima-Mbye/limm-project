"use client";

export default function SubmitButton() {
  const submitForm = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Ebrima Mbye",
      }),
    });
    console.log("Response: ", response);
  };
  return (
    <button
      type="submit"
      onClick={(e) => submitForm(e)}
      className="w-full rounded-[12px] bg-[#356BB7] py-2 text-white transition-colors duration-300 hover:bg-blue-600"
    >
      Login
    </button>
  );
}
