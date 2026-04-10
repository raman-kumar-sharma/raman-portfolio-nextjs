"use client";
import { useState, useEffect } from "react";
import CanvasBackground from "@/components/CanvasBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AdminExpertise from "@/components/AdminExpertise";
import Terminal from "@/components/Terminal";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import BackToTop from "@/components/BackToTop";
import Toast from "@/components/Toast";
import HireMe from "@/components/HireMe";
import GlobalEffects from "@/components/GlobalEffects";

export default function Home() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme") ?? "theme-future";
    }
    return "theme-future";
  });

  const handleTheme = (t: string) => {
    setTheme(t);
    document.body.className = t;
    localStorage.setItem("portfolio-theme", t);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <ProgressBar />
      <CanvasBackground theme={theme} />
      <Header currentTheme={theme} onThemeChange={handleTheme} />
      <main>
        <Hero />
        <Skills />
        {/* <Achievements /> */}
        <Timeline />
        <Experience />
        <Projects />
        <AdminExpertise />
        <Terminal />
        <Education />
      </main>
      <Footer />
      <BackToTop />
      <Toast />
      <HireMe />
      <GlobalEffects />
    </>
  );
}
