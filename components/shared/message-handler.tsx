"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { authErrorMessages, successMessages } from "@/constants/messages";

export function MessageHandler() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const errorCode = searchParams.get("error");
    const successCode = searchParams.get("success");

    if (errorCode) {
      const errorMessage =
        authErrorMessages[errorCode] || "An unknown error occurred.";
      setMessage(errorMessage);
      setIsError(true);
      setIsVisible(true);
    } else if (successCode) {
      const successMessage =
        successMessages[successCode] || "Operation completed successfully.";
      setMessage(successMessage);
      setIsError(false);
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  if (!message) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={`fixed right-4 top-4 z-50 max-w-xs rounded-md p-3 shadow-sm ${
            isError ? "bg-red-50" : "bg-green-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <p
              className={`text-xs font-medium ${
                isError ? "text-red-800" : "text-green-800"
              }`}
            >
              {message}
            </p>
            <button
              onClick={() => {
                setIsVisible(false);
              }}
              className={`ml-2 rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isError
                  ? "text-red-400 hover:bg-red-100 focus:ring-red-500"
                  : "text-green-400 hover:bg-green-100 focus:ring-green-500"
              }`}
            >
              <span className="sr-only">Dismiss</span>
              <X className="size-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
