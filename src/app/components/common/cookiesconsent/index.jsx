"use client";
import React from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localconsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localconsent", true, {});
  };

  const declineCookie = () => {
    setShowConsent(true);
    setCookie("localconsent", false, {});
  };

  if (showConsent) {
    return null;
  }
  return (
    <div class="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center justify-center bg-gray-800 text-white p-4 sm:p-6 lg:p-8">
      <p class="text-lg md:text-xl text-center mb-4">
        We use cookies and other tracking technologies to improve your browsing
        experience on our website, to analyze our website traffic, and to
        understand where our visitors are coming from.
      </p>
      <div class="flex flex-col md:flex-row gap-2">
        <button
          class="bg-teal-600 w-full min-w-[200px] hover:bg-teal-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg mb-2 md:mb-0"
          onClick={acceptCookie}
        >
          I Agree
        </button>
        <button
          class="bg-gray-600 w-full min-w-[200px] hover:bg-gray-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg"
          onClick={declineCookie}
        >
          I Decline
        </button>
      </div>
    </div>
  );
};

export default CookiesConsent;
