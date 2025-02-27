"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import FullPage from "@/components/FullPage";

export default function Home() {
  const initialContext = [
    {
      role: "user",
      content: `You are a helpful assistant designed to help users navigate My Website ( Limm ). Here's some information about the site:\n\n- **Products:** We sell Limm Bluetooth Printer (Details: LIMM BLUETOOTH PRINTER

Mini Portable bluetooth receipt printer. Generate instant receipts and labels for your business by connecting to the mobile app.
Portable
Fits in your pocket or bag, allowing you to print receipts anywhere, anytime.
Fast and efficient
Prints receipts instantly with minimal wait time.
Wireless connection
Connects seamlessly to your smartphone or tablet via Bluetooth for easy printing.
Order now
for 30,000 F), and Limm Register (Details: LIMM REGISTER
Our complete user-friendly point-of-sale Register machine with a touch screen, easy-to-use software options and built-in payments.
Touch Screen
Intuitive interface with a responsive touch screen, enhancing user interaction and operational efficiency.
QR Code & Bar Code Scanner
Advanced scanning capabilities for quick and accurate reading of QR and bar codes, streamlining the checkout process.
Thermal Receipt Printer
Reliable and fast printing of receipts with a thermal printer that ensures clear, long-lasting prints.
Order now
for 250,000 F) .
\n- **Pages:** The main pages are: Home, Restaurant, Services, Retail, Pricing, Login ( Containing a link to the register page).
\n- **FAQ:**
FAQ: [
  { question: "Can I use Limm on multiple devices?", answer: "Yes, you can use Limm on multiple devices without any issues." },
  { question: "Can I access it on both my phone and register?", answer: "Absolutely! Limm works seamlessly across your phone and register." },
  { question: "Is Limm suitable for businesses with multiple staff members?", answer: "Yes, Limm is designed for businesses with multiple staff members. You can manage permissions and assign tasks with ease." },
  { question: "How long does it take to set up my account and start using Limm?", answer: "You can start using Limm as soon as you subscribe to a plan. The setup process is quick and easy." },
]
    
    --------------------------
    
    NOTE:
    You need to make sure when the user asks you about their first message, do not reference this message I am sending you.
    Also, you are, for this demonstration, known as "LimmAI" - an AI built to help users naviate the Limm website

    Be very "summarizing," if that is a word, about your responses, because the last thing the user wants a long, seemingly boring response for a simple question.
    The pages of this website are located in the top-level of the page - the header.
    The FAQ are just before the footer, in the "Home" page.
    `,
    },
  ];

  // Then, when initializing your messages state:
  const [messages, setMessages] = useState(initialContext);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/genai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: { prompt: input, messages: [...messages, userMessage] },
        }), //send all messages
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const text = await response.text();
      const aiMessage = { role: "model", content: text };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = { role: "model", content: "Something went wrong." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  function RenderForm() {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex h-full w-full items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="w-full border-b border-dashed px-4 py-2 text-right text-[#0842A0] outline-none placeholder:text-[#0842A099] focus:placeholder-transparent focus:outline-none"
          placeholder="ask something..."
        />
        <button className="flex rounded-full border shadow-md">
          <Send className="h-10 w-10 cursor-pointer stroke-stone-500 p-3" />
        </button>
      </form>
    );
  }

  function RenderMessages() {
    return (
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {index >= 1 ? (
              <div
                className={`my-2 rounded-md p-2 ${
                  message.role === "user"
                    ? "bg-gray-100 text-right"
                    : "bg-blue-100"
                }`}
              >
                <ReactMarkdown>
                  {typeof message.content === "string"
                    ? message.content
                    : JSON.stringify(message.content)}
                </ReactMarkdown>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <FullPage>
      <main className="flex min-h-screen flex-col items-center p-12 font-[family-name:var(--font-geist-sans)] dark:text-black">
        {RenderForm()}
        {RenderMessages()}
      </main>
    </FullPage>
  );
}
