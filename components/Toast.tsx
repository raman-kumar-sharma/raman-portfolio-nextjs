"use client";
import { useEffect } from "react";

export default function Toast() {
  useEffect(() => {
    (window as any).showToast = (msg: string) => {
      const toast = document.getElementById("toast");
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2500);
    };
  }, []);

  return <div className="toast" id="toast" />;
}
