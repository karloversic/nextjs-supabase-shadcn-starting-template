"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { authErrorMessages, successMessages } from "@/constants/messages";
import { useMessage } from "@/context/MessagesProvider";

export function MessageHandler() {
  const { message, showMessage, hideMessage } = useMessage();
  const searchParams = useSearchParams();

  useEffect(() => {
    const errorCode = searchParams.get("error");
    const successCode = searchParams.get("success");

    if (errorCode) {
      const errorMessage =
        authErrorMessages[errorCode] || "An unknown error occurred.";
      showMessage(errorMessage, "error");
    } else if (successCode) {
      const successMessage =
        successMessages[successCode] || "Operation completed successfully.";
      showMessage(successMessage, "success");
    }
  }, [searchParams, showMessage]);

  if (!message) return null;

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={`fixed right-4 top-4 z-50 max-w-xs rounded-md p-3 shadow-sm ${
            message.type === "error"
              ? "bg-red-50"
              : message.type === "success"
                ? "bg-green-50"
                : "bg-blue-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <p
              className={`text-xs font-medium ${
                message.type === "error"
                  ? "text-red-800"
                  : message.type === "success"
                    ? "text-green-800"
                    : "text-blue-800"
              }`}
            >
              {message.text}
            </p>
            <button
              onClick={hideMessage}
              className={`ml-2 rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                message.type === "error"
                  ? "text-red-400 hover:bg-red-100 focus:ring-red-500"
                  : message.type === "success"
                    ? "text-green-400 hover:bg-green-100 focus:ring-green-500"
                    : "text-blue-400 hover:bg-blue-100 focus:ring-blue-500"
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
