"use client";
import { useEffect } from "react";

export default function BackToTop() {
  useEffect(() => {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    const onScroll = () => btn.classList.toggle("visible", window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className="back-to-top"
      id="backToTop"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
