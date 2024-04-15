"use client";

import { useEffect } from "react";

const useStripeScript = (src) => {
  useEffect(() => {
    // Check if the script is already present in the document
    if (document.querySelector(`script[src="${src}"]`)) {
      return;
    }

    // Create a new script element
    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    // Append the script to the document's head
    document.head.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.head.removeChild(script);
    };
  }, [src]);
};

const StripeBuyButton = ({ buyButtonId, publishableKey }) => {
  // Use the custom hook to load the Stripe script
  useStripeScript("https://js.stripe.com/v3/buy-button.js");

  return (
    <stripe-buy-button
      buy-button-id={buyButtonId}
      publishable-key={publishableKey}
    ></stripe-buy-button>
  );
};

export default function Payment() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ff2d55]">
      <div className="flex justify-center items-center p-20  rounded-[32px] bg-[#ff2d55]">
        <StripeBuyButton
          buyButtonId="buy_btn_1P5wlpJ6NbSgV0UTQf8q6aXE"
          publishableKey="pk_test_51P5wGHJ6NbSgV0UT74B4TmamwSXZQOysAVZU7Igw5mtnCuujzmUdwMLs9QHHXxXPiEInoydIqJDiwGV905q9idPN00zfgKhcNs"
        />
      </div>
    </div>
  );
}
