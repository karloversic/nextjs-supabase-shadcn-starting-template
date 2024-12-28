"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

type MessageType = "error" | "success" | "info";

interface Message {
  text: string;
  type: MessageType;
  duration?: number;
}

interface MessageContextType {
  message: Message | null;
  showMessage: (text: string, type: MessageType, duration?: number) => void;
  hideMessage: () => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<Message | null>(null);

  const showMessage = useCallback(
    (text: string, type: MessageType, duration = 5000) => {
      setMessage({ text, type, duration });
    },
    [],
  );

  const hideMessage = useCallback(() => {
    setMessage(null);
  }, []);

  useEffect(() => {
    if (message && message.duration) {
      const timer = setTimeout(() => {
        hideMessage();
      }, message.duration);

      return () => clearTimeout(timer);
    }
  }, [message, hideMessage]);

  return (
    <MessageContext.Provider value={{ message, showMessage, hideMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  return context;
}
