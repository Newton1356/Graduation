"use client";

import { useEffect, useRef } from "react";

export default function Chatbot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptSrc = "https://unpkg.com/@elevenlabs/convai-widget-embed";

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (containerRef.current) {
          const widget = containerRef.current.querySelector("elevenlabs-convai") as HTMLElement;
          if (widget) {
            widget.style.position = "fixed";
            widget.style.bottom = "5px";
            widget.style.right = "5px";
            widget.style.top = "auto";
            widget.style.left = "auto";
            widget.style.zIndex = "9999";
          }
        }
      };
    }
  }, []);

  useEffect(() => {
    if (containerRef.current && typeof window !== "undefined") {
      const widget = document.createElement("elevenlabs-convai");
      widget.setAttribute("agent-id", "agent_6701krcdzz72e9k9fdsxr9va0xgy");
      widget.setAttribute("style", "width: 350px; height: 500px;");
      containerRef.current.appendChild(widget);

      return () => {
        if (containerRef.current && widget.parentNode) {
          widget.parentNode.removeChild(widget);
        }
      };
    }
  }, []);

  return <div ref={containerRef}></div>;
}
