"use client";

import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Analytics } from "@vercel/analytics/react";
// fonts
import { Titillium_Web } from "next/font/google";

// component Imports
import Navbar from "@/components/Navbar/Navbar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import ScrollToTop from "@/components/Misc/ScrollToTop";
import Footer from "@/components/Footer/Footer";

const titillium_web = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const metadata = {
  title: "helpmefolks",
  description: "Easing your academic journey",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titillium_web.className} bg-[#0c0f14]`}>
        <ProgressBar
          height="2px"
          color="#66fb95"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ScrollToTop />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
