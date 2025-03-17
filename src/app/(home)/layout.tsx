"use client";
import { Logo } from "@/components";
import AppHeader from "@/components/AppHeader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStep(1);
    }, 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="relative w-full">
      <motion.div
        initial={{ y: "0%" }}
        animate={step === 1 ? { y: "-100%" } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={() => setStep(2)}
        className={`absolute top-0 left-0 w-full h-screen bg-[#231F20] flex items-center justify-center z-50 ${
          step === 2 ? "hidden" : ""
        }`}
      >
        <Logo />
      </motion.div>

      <motion.div
        initial={{ y: "0" }}
        animate={step === 2 ? { y: "100%" } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-screen bg-white z-40"
      />
      <AppHeader />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
