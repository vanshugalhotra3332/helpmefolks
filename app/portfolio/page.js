import React from "react";
import PortfolioMasonry from "@/components/Masonry/PortfolioMasonry";
import { portfolioItemsMain } from "@/data";
import Image from "next/image";

export const metadata = {
  title: "helpmefolks - Portfolio",
  description: "Portfolio HelpMeFolks!",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

const Portfolio = () => {
  return (
    <main>
      <section className="h-[40vh] md:h-[30vh] lg:h-[60vh] relative w-full flex bg-[url('/assets/images/background/comp.jpg')] bg-center bg-no-repeat bg-cover opacity-100 flex-wrap items-center">
        <div className="contact-text mt-0 mb-0 p-[40px] md:p-[150px] w-full relative">
          <h2 className="text-[44px] md:text-[56px] lg:text-[95px] font-bold tracking-wide text-center max-w-[1300px] text-[#fff]">
            Portfolio
          </h2>
        </div>
      </section>
      <section className="w-full border-t border-[#161d25] px-2 py-12 md:px-8 2xl:px-20 md:py-12 flex justify-between flex-col">
        <h1 className="section-heading">
          <span className="mx-2">
            <Image
              alt=""
              src={"/assets/images/logo/icon.png"}
              width={40}
              height={40}
              loading="lazy"
            />
          </span>
          Our Portfolio
        </h1>
        <p className="section-subheading ">
          Portfolio Highlights: Projects and Success Stories
        </p>
        <div className="portfolio-masonry px-4 xl:px-16">
          <PortfolioMasonry portfolioItems={portfolioItemsMain} equal={true} />
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
