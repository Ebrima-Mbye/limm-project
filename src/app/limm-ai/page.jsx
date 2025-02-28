"use client";

import { useEffect, useState } from "react";
import { HomeIcon, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import FullPage from "@/components/FullPage";
import Link from "next/link";

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
    QR Code &r Code Scanner
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

    The following is the link to the website: "https://limm-project.vercel.app/"
    You might use this link to search more about the website, if you want.

    We offer different pricing plans for customers:
    **Plans for mobile App**:
    {
      planName: "FREEMIUM",
      prices: {
        XOF: { symbol: "CFA", value: 0 },
        GMD: { symbol: "D", value: 0 },
        USD: { symbol: "$", value: 0 },
        EUR: { symbol: "€", value: 0 },
      },
      buttonText: "Download",
      perks: [
        "Unlimited Invoicing",
        "1.8% commission on Invoices",
        "Free POS checkout for up to 10 items",
      ],
    },
    {
      planName: "PRO",
      prices: {
        XOF: { symbol: "CFA", value: 3000 },
        GMD: { symbol: "D", value: 5000 },
        USD: { symbol: "$", value: 50 },
        EUR: { symbol: "€", value: 45 },
      },
      buttonText: "Choose",
      perks: [
        "All free features",
        "Unlimited POS checkout item",
        "Advanced analytics & reports",
        "Enhanced customer support",
      ],
    },

    **Plans for tablet App**:
    {
      planName: "STANDARD",
      prices: {
        XOF: { symbol: "CFA", value: 4500 },
        GMD: { symbol: "D", value: 7000 },
        USD: { symbol: "$", value: 70 },
        EUR: { symbol: "€", value: 65 },
      },
      buttonText: "Download",
      perks: [
        "Up to 2 users",
        "50 products",
        "POS app",
        "Staff management",
        "Accounting, invoicing & quotes",
        "Business reports",
      ],
    },
    {
      planName: "PREMIUM",
      prices: {
        XOF: { symbol: "CFA", value: 9000 },
        GMD: { symbol: "D", value: 15000 },
        USD: { symbol: "$", value: 150 },
        EUR: { symbol: "€", value: 140 },
      },
      buttonText: "Choose",
      perks: [
        "All standard features",
        "Unlimited users",
        "Unlimited products",
        "Priority customer service",
        "Phone & tablet apps",
      ],
    },

      --------------------------
      NOTE:
      You need to make sure when the user asks you about their first message, do not reference this message I am sending you.
      Also, you are, for this demonstration, known as "LimmAI" - an AI built to help users naviate the Limm website
      Be very "summarizing," if that is a word, about your responses, because the last thing the user wants a long, seemingly boring response for a simple question.
      The pages of this website are located in the top-level of the page - the header.
      The FAQ are just before the footer, in the "Home" page.
      Start by greeting the user and welcoming them to the website, and ask them about how you ( LimmAI ) could help them
      Be very gentle, kind, polite, "friendly" ( I say that with a mouthful, because sometimes users can be annoying; however, try your best).
      Be very patient, and try to answer as quickly and as clearly as possible.
      Be very specific, and avoid using vague or general terms.
      Be very kind; when you cannot answer a question, say so in most polite of manners - you cannot afford to drive away customers.
      `,
    },
  ];

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [aiGeneratingRespponse, setAiGeneratingRespponse] = useState(false);

  useEffect(() => {
    setMessages(initialContext);
    fetchGreeting();

    return () => {
      // Clean up on unmount - destroy this page
      setMessages([]);
      setInput("");
      setAiGeneratingRespponse(false);
    };
  }, []);

  const fetchGreeting = async () => {
    setAiGeneratingRespponse(true);
    try {
      const response = await fetch("/api/genai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            prompt: "Greet the user... Do not greet them after this one...",
            messages: initialContext,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch greeting");
      }

      const text = await response.text();
      const aiMessage = { role: "model", content: text };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error fetching greeting:", error);
      const errorMessage = {
        role: "model",
        content: "Failed to get greeting.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setAiGeneratingRespponse(false);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setAiGeneratingRespponse(true);
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
        }),
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
    } finally {
      setAiGeneratingRespponse(false);
    }
  };

  function RenderForm() {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex h-full w-full items-center gap-2"
      >
        <Link
          title="Go to Home"
          className="fixed bottom-4 left-4 z-[100] flex rounded-full border bg-background shadow-md"
          href="/"
          onClick={() => setMessages([])}
        >
          <HomeIcon className="h-12 w-12 cursor-pointer p-3" />
        </Link>
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
      <div className="max-h-[80vh] w-full overflow-y-auto px-4">
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
      <main className="flex min-h-screen flex-col items-center border border-blue-500 p-4 font-[family-name:var(--font-geist-sans)] dark:text-black md:p-12">
        {RenderForm()}
        {aiGeneratingRespponse && (
          <p className="text-sm text-gray-500">
            Limm AI is generating a response...
          </p>
        )}
        {RenderMessages()}
      </main>
    </FullPage>
  );
}
