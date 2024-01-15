import React, { useEffect } from "react";

declare global {
  interface Window {
    CustomSubstackWidget: any; // Use 'any' or a more specific type if available
  }
}

export const CustomSubstackEmbed: React.FC = () => {
  useEffect(() => {
    // Set up the widget configuration
    window.CustomSubstackWidget = {
      substackUrl: "conveyor.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "SUBSCRIBE",
      theme: "custom",
      colors: {
        primary: "#1976d2",
        input: "none",
        email: "#BBBBBB",
        text: "#ffffff",
      },
    };

    // Create a script element
    const script = document.createElement("script");
    script.src = "https://substackapi.com/widget.js";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Clean-up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="custom-substack-embed"></div>;
};
