import React from "react";
import Image from "next/image";

import { servicesItemsMain } from "@/data";
import ServicesCard from "@/components/Cards/ServicesCard";

export const metadata = {
  title: "helpmefolks - Services",
  description: "Services HelpMeFolks!",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

const Services = () => {
  return (
    <main>
      <section className="h-[40vh] md:h-[30vh] lg:h-[60vh] relative w-full flex bg-[url('/assets/images/background/swans.png')] bg-center bg-no-repeat bg-cover opacity-100 flex-wrap items-center">
        <div className="contact-text mt-0 mb-0 p-[40px] md:p-[150px] w-full relative">
          <h2 className="text-[44px] md:text-[56px] lg:text-[95px] font-bold tracking-wide text-center max-w-[1300px] text-[#fff]">
            Services
          </h2>
        </div>
      </section>
      {/* services */}
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
          Our Services
        </h1>
        <p className="section-subheading ">
          Unlocking Your Academic Potential with Our Specialized Services
        </p>
        <div className="relative grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4 md:my-8 mx-2">
          {servicesItemsMain.map((item, index) => {
            return (
              <div className="relative my-4" key={index}>
                <ServicesCard {...item} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Services;
