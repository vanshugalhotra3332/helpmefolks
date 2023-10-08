import Image from "next/image";
import { Sora } from "next/font/google";
import dynamic from "next/dynamic";
import {
  carouselImages,
  testimonials,
  portfolioItems,
  servicesItems,
} from "@/data";

// components

const PrimaryButton = dynamic(
  () => import("@/components/Button/PrimaryButton"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Carousel = dynamic(() => import("@/components/Carousel/Carousel"), {
  loading: () => <p>Loading...</p>,
});
const ServicesCardWithImage = dynamic(
  () => import("@/components/Cards/ServicesCardWithImage"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const PortfolioMasonry = dynamic(
  () => import("@/components/Masonry/PortfolioMasonry"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const StatCard = dynamic(() => import("@/components/Cards/StatCard"), {
  loading: () => <p>Loading...</p>,
});
const TestimonialsCarousel = dynamic(
  () => import("@/components/Carousel/TestimonialsCarousel"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata = {
  title: "HelpMeFolks",
  description: "Easing your academic journey",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

export default function Home() {
  return (
    <main>
      {/* heading */}
      <section className="w-full border border-[#161d25]  px-4 py-12 md:px-24 md:py-20 flex justify-between flex-col lg:flex-row">
        <div className="text-content max-w-[800px] py-8">
          <div className="heading text-[60px] md:text-[100px] leading-[60px] md:leading-[100px] text-[var(--secondary-color)] font-semibold capitalize text-left">
            <h1 className="">Excel. Achieve. Succeed.</h1>
            {/* <cite className="stroke-text outline-none not-italic">Path</cite> */}
          </div>
          <p
            className={` ${sora.className} text-[var(--third-color)] leading-snug text-sm md:text-lg my-8 font-normal max-w-[500px] text-left tracking-wider px-2`}
          >
            Transforming stress into boundless success: Expertly solving
            assignments, empowering you to conquer your academic journey.
          </p>
          <div className="my-4 ">
            <PrimaryButton
              text={"Explore More"}
              url={"/services"}
              className=""
            />
          </div>
        </div>
        <div className="carousel">
          <Carousel images={carouselImages} />
        </div>
      </section>

      {/* services */}
      <section className="w-full border-t border-[#161d25]  px-4 py-12 md:px-24 md:py-20 flex justify-between flex-col">
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
        <div className="services-cards-grid relative grid justify-center grid-cols-1 lg:grid-cols-2 gap-4 my-4 md:my-16 mx-6">
          {servicesItems.map((item, index) => {
            return (
              <div className="grid-item relative my-4" key={index}>
                <ServicesCardWithImage {...item} />
              </div>
            );
          })}
        </div>
      </section>

      {/* portfolio */}
      <section className="w-full px-2 md:px-12 py-6 flex justify-between flex-col">
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
        <p className="section-subheading">
          Portfolio Highlights: Recent Projects and Success Stories
        </p>
        <div className="portfolio-masonry">
          <PortfolioMasonry portfolioItems={portfolioItems} />
        </div>
      </section>

      {/* stats */}
      <section className="stats-section my-12 hidden lg:block">
        <div className="stat-items max-w-[1338px] flex flex-col lg:flex-row justify-center items-center mx-auto relative">
          <div className="w-full md:w-1/2 xl:w-1/4">
            <StatCard counter={"03"} text={"Years of experience"} />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4">
            <StatCard counter={25} text={"Projects Completed"} />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4">
            <StatCard counter={12} text={"Team Members"} />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4">
            <StatCard counter={20} text={"Happy Clients"} />
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="w-full px-2 md:px-12 py-6 my-8 flex justify-between flex-col">
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
          word of mouth
        </h1>
        <p className="section-subheading">Hear What Our Clients Say</p>

        <div className="my-8">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
    </main>
  );
}
