"use client";
import Overlay from "@/components/EvenntComponent/Overlay";
import EventForm from "@/components/event-form";
import HomepageHeader from "@/components/homepage-header";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  const [emailVerfied, setEmailVerified] = useState(false);
  const [mobileVerfied, setMobileVerified] = useState(false);

  const handleEmailVerification = () => {
    setEmailVerified(true);
  };

  const handleMobileVerification = () => {
    setMobileVerified(true);
  };

  return (
    <main className="w-full relative h-full">
      {!emailVerfied && !mobileVerfied && (
        <Overlay
          mobileVerify={handleEmailVerification}
          emailVerify={handleMobileVerification}
        />
      )}
      <div className="relative w-[646px] mx-auto">
        <Navbar />
        <HomepageHeader />
        <EventForm />
      </div>
    </main>
  );
}
