"use client";
import { useEffect } from "react";

export default function ProgressBar() {
  useEffect(() => {
    const bar = document.getElementById("progressBar");
    if (!bar) return;
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = (winScroll / h) * 100 + "%";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="progressBar" />;
}
