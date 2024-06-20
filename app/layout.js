"use client";

import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Analytics } from "@vercel/analytics/react";
// fonts
import { Titillium_Web } from "next/font/google";
import Head from "next/head";

// component Imports
import Navbar from "@/components/Navbar/Navbar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import ScrollToTop from "@/components/Misc/ScrollToTop";
import Footer from "@/components/Footer/Footer";

const titillium_web = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/*title and meta description */}
        <title>HelpMeFolks - Easing Your Academic Journey</title>
        <meta
          name="description"
          content="Discover academic excellence with HelpMeFolks.tech! 🚀 We offer top-notch project solutions at budget-friendly rates, ensuring quality work delivered on time. Simplify your student journey with us. 📚💡 #ProjectSolutions #AcademicSuccess"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "HelpMeFolks",
            "description": "Empower your academic journey with HelpMeFolks! Your trusted source for high-quality project solutions.",
            "url": "https://helpmefolks.tech",
            "logo": "https://www.helpmefolks.tech/assets/images/logo/logo11.svg"
          }
        `,
          }}
        />
      </Head>
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
        <script
          src="//code.tidio.co/r2yrljx4uvqipzamos6pp9x7lkjitcap.js"
          async
        ></script>
      </body>
    </html>
  );
}
