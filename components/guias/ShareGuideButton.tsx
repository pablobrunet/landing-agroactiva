"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareGuideButtonProps {
  path: string;
}

export function ShareGuideButton({ path }: ShareGuideButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = `${window.location.origin}${path}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button type="button" variant="secondary" size="sm" onClick={handleShare}>
      {copied ? (
        <>
          <Check className="mr-2 h-4 w-4 text-accent-secondary" />
          URL copiada
        </>
      ) : (
        <>
          <Share2 className="mr-2 h-4 w-4" />
          Compartir
        </>
      )}
    </Button>
  );
}
