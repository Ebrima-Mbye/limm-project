"use client";

import { useEffect, useState } from "react";
import { HomeIcon, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import FullPage from "@/components/FullPage";
import Link from "next/link";
import { aiTrainingData } from "@/data/limm-ai";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [aiGeneratingRespponse, setAiGeneratingRespponse] = useState(false);

  useEffect(() => {
    setMessages(aiTrainingData);
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
            messages: aiTrainingData,
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
      const errorMessage = {
        role: "model",
        content: "Something went wrong. Please try again later...",
      };
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
          className="fixed left-1 top-1 z-[100] flex rounded-full border bg-background shadow-md md:bottom-4 md:left-4 md:top-auto"
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
      <div className="max-h-[75vh] w-full overflow-y-auto px-4 md:max-h-[80vh]">
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
      <main className="flex min-h-screen flex-col items-center p-4 font-[family-name:var(--font-geist-sans)] dark:text-black md:p-12">
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
