import ContactItem from "@/components/Cards/ContactItem";
import React from "react";

import { contactItems } from "@/data";
import ContactForm from "@/components/Forms/ContactForm";
import PrimaryButton from "@/components/Button/PrimaryButton";

import { whatsappNumber } from "@/data";


import { BiPhoneCall } from "react-icons/bi";

export const metadata = {
  title: "helpmefolks - Contact",
  description: "Contact HelpMeFolks!",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

const ContactUs = () => {
  return (
    <main>

      <section className="h-[40vh] md:h-[40vh] lg:h-[60vh] relative w-full flex bg-[url('/assets/images/background/nofuture.png')] bg-center bg-no-repeat bg-cover opacity-100 flex-wrap items-center">
        <div className="contact-bg"></div>
        <div className="contact-text mt-0 mb-0 p-[40px] md:p-[150px] w-full relative">
          <h2 className="text-[40px] md:text-[50px] lg:text-[65px] font-bold tracking-wide text-center max-w-[1300px] text-[#fff]">
            Get in touch with us
          </h2>
        </div>
      </section>
      <section className="contact-info py-16 px-4 md:px-8 lg:px-16">
        <div className="contact-items grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <ContactItem
                  {...item}
                  number={`${index + 1 > 9 ? "" : "0"}${index + 1}`}
                />
              </div>
            );
          })}
        </div>
        <div className="contact-form-container py-12 my-12 flex flex-col lg:flex-row space-y-5">
          <div className="w-full lg:w-2/3">
            <ContactForm />
          </div>
          <div className="right-image w-full lg:w-1/3 relative">
            <div className="text-center relative px-4 rounded-md overflow-hidden z-10 pt-[240px] md:pt-[150px] lg:pt-[240px] pb-[70px]">
              <div className="form-image"></div>
              <div className="text text-[var(--secondary-color)] text-[32px] md:text-[40px] lg:text-[32px] max-w-[300px] md:max-w-[400px] lg:max-w-[300px] mt-0 mx-auto mb-8 font-bold capitalize">
                Have any query feel free to contact us
              </div>
              <div>
                <PrimaryButton
                  text={whatsappNumber}
                  url={`tel:${whatsappNumber}`}
                  size="small"
                  icon={<BiPhoneCall className="w-5 h-5 mx-2" />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
