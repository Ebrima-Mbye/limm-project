"use client";

import { useState } from "react";
import FullPage from "@/components/FullPage";
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
  const [show, setShow] = useState(false);

  return (
    <FullPage>
      <div className="w-full flex h-screen flex-col">
        <div className="h-32 p-7 text-2xl">
          {show && (
            <AnimatePresence exit={{ y: -100, opacity: 0 }}>
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, duration: 1.5 }}
              >
                Hey, how is it going?
              </motion.h1>
            </AnimatePresence>
          )}
        </div>
        <motion.button
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.5 }}
          onClick={() => setShow(!show)}
          className="bg-foreground text-background px-8 text-xl py-2 mx-auto rounded-full"
        >
          {show ? "hide" : "show"}
        </motion.button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="grid place-content-center flex-1 text-xl"
        >
          <h1 className="text-2xl mb-6 font-serif ">Some heading</h1>
          <ul>
            <li>category 1</li>
            <li>category 2</li>
            <li>category 3</li>
            <li>category 4</li>
            <li>category 5</li>
            <li>category 6</li>
            <li>category 7</li>
          </ul>
        </motion.div>
      </div>
    </FullPage>
  );
}
