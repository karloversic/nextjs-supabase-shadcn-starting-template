"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMessage } from "@/context/MessagesProvider";

interface CodeBoxProps {
  command: string;
  useCard?: boolean;
}

export default function CodeBox({ command, useCard = true }: CodeBoxProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { showMessage } = useMessage();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setIsCopied(true);
      showMessage("Copied to clipboard!", "success", 3000); // Message will disappear after 3 seconds
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      showMessage("Failed to copy", "error", 3000);
    }
  };

  const Content = (
    <>
      <pre className="text-sm md:text-md font-mono bg-muted p-3 rounded-md overflow-x-auto">
        <code>{command}</code>
      </pre>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-3 right-3"
        onClick={copyToClipboard}
        aria-label={isCopied ? "Copied" : "Copy to clipboard"}
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Clipboard className="h-4 w-4" />
        )}
      </Button>
    </>
  );

  return useCard ? (
    <Card className="relative max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
      <CardContent className="p-4">{Content}</CardContent>
    </Card>
  ) : (
    <div className="relative">{Content}</div>
  );
}
