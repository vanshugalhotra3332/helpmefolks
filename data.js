import Image from "next/image";

import {
  MdLocationOn,
  MdOutlineEmail,
  MdOutlineWhatsapp,
} from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

export const whatsappNumber = "+91-8427733664";
const text = `Hi, HelpMeFolks! I need assistance with my assignment. Can you help? `;

const generateWhatsAppLink = (phoneNumber, text) => {
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
  const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(
    text
  )}`;
  return whatsappLink;
};

export const whatsappLink = generateWhatsAppLink(whatsappNumber, text);
export const email = "helpmefolks@gmail.com";
export const emailLink = `mailto:${email}`;

export const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },

  {
    name: "Contact",
    url: "/contact",
  },
];

export const carouselImages = [
  <div className="carousel-content" key={1}>
    <Image
      alt=""
      src={"/assets/images/background/carousel-1.jpg"}
      width={509}
      className=""
      height={718}
      loading="lazy"
    />
  </div>,
  <div className="carousel-content" key={2}>
    <Image
      alt=""
      src={"/assets/images/background/carousel-2.jpg"}
      width={509}
      className=""
      height={718}
      loading="lazy"
    />
  </div>,
];

export const portfolioItems = [
  {
    category: "Wordpress",
    url: "https://kasauliforestville.com/",
    image: "/assets/images/background/portfolio/kasauli.png",
    title: "Forest Ville",
  },

  {
    category: "Graphic Designing",
    url: "/portfolio",
    image: "/assets/images/background/portfolio/promo.jpg",
    title: "Poster Design",
  },

  {
    category: "Graphic Design",
    url: "/portfolio",
    image: "/assets/images/background/portfolio/thumb.jpg",
    title: "Thumbnail Design",
  },
  {
    category: "Website Development",
    url: "https://dareadream.in",
    image: "/assets/images/background/portfolio/dare_dream.jpg",
    title: "Dare Dream",
  },
  {
    category: "GUI Development",
    url: "/portfolio",
    image: "/assets/images/background/portfolio/gui.png",
    title: "Python GUI",
  },
  {
    category: "Graphic Design",
    url: "/portfolio",
    image: "/assets/images/background/portfolio/ad.jpg",
    title: "Thumbnail Design",
  },
  {
    category: "Microsoft Excel",
    url: "/portfolio",
    image: "/assets/images/background/portfolio/excel.png",
    title: "Microsoft Excel",
  },
  {
    category: "PowerPoint",
    url: "/portfolio",
    image: "/assets/images/background/portfolio/ppt.png",
    title: "PowerPoint Presentation",
  },
  {
    category: "Website Development",
    url: "https://heenasinghal.com",
    image: "/assets/images/background/portfolio/heena_singhal.jpg",
    title: "Personal Portfolio",
  },
  {
    category: "Wordpress",
    url: "https://topnotchclass.com/",
    image: "/assets/images/background/portfolio/topnotch.png",
    title: "Top Notch Classes",
  },
  {
    category: "Command Line Programs",
    url: "/portfolio",
    image: "/assets/images/background/portfolio/scientific.png",
    title: "scientific Calculator",
  },
  {
    category: "Wordpress",
    url: "https://waterlooenergy.com/",
    image: "/assets/images/background/portfolio/waterloo.png",
    title: "Waterloo Energy",
  },
];

export const portfolioItemsMain = [
  {
    category: "Graphic Designing",
    image: "/assets/images/background/portfolio/promo.jpg",
    title: "Poster Design",
  },

  {
    category: "Graphic Design",
    image: "/assets/images/background/portfolio/thumb.jpg",
    title: "Thumbnail Design",
  },
  {
    category: "Website Development",
    url: "https://dareadream.in",
    image: "/assets/images/background/portfolio/dare_dream_small.jpg",
    title: "Dare Dream",
  },
  {
    category: "GUI Development",
    image: "/assets/images/background/portfolio/gui_small.png",
    title: "Python GUI",
  },
  {
    category: "Graphic Design",
    image: "/assets/images/background/portfolio/ad.jpg",
    title: "Thumbnail Design",
  },
  {
    category: "Microsoft Excel",
    url: "/portfolio",
    image: "/assets/images/background/portfolio/excel.png",
    title: "Microsoft Excel",
  },
  {
    category: "Wordpress",
    url: "https://topnotchclass.com/",
    image: "/assets/images/background/portfolio/topnotch.png",
    title: "Top Notch Classes",
  },
  {
    category: "PowerPoint",
    url: "/portfolio",
    image: "/assets/images/background/portfolio/ppt.png",
    title: "PowerPoint Presentation",
  },
  {
    category: "Website Development",
    url: "https://heenasinghal.com",
    image: "/assets/images/background/portfolio/heena_singhal_small.png",
    title: "Personal Portfolio",
  },
  {
    category: "Wordpress",
    url: "https://kasauliforestville.com/",
    image: "/assets/images/background/portfolio/kasauli.png",
    title: "Forest Ville",
  },
  {
    category: "Command Line Programs",
    url: "/portfolio",
    image: "/assets/images/background/portfolio/scientific.png",
    title: "scientific Calculator",
  },
  {
    category: "Wordpress",
    url: "https://waterlooenergy.com/",
    image: "/assets/images/background/portfolio/waterloo.png",
    title: "Waterloo Energy",
  },
];

export const servicesItems = [
  {
    heading: "Website Development",
    description:
      "Empowering Students: Crafting Web Solutions for Academic Excellence.",
    icon: "/assets/images/icons/services/web.png",
    backImage: "/assets/images/background/services/web.jpg",
    url: whatsappLink,
    buttonText: "Request a Quote",
  },
  {
    heading: "Graphic Designing",
    description:
      "Elevating Creativity: Transforming Ideas into Striking Visuals.",
    icon: "/assets/images/icons/services/graphic.png",
    backImage: "/assets/images/background/services/graphics.jpg",
    url: whatsappLink,
    buttonText: "Request a Quote",
  },
  {
    heading: "English assignments",
    description:
      "Elevating Your English Assignments: Quality and Excellence Delivered.",
    icon: "/assets/images/icons/services/english.svg",
    backImage: "/assets/images/background/services/essay.jpg",
    url: whatsappLink,
    buttonText: "Request a Quote",
  },
  {
    heading: "Microsoft Office",
    description: "MS-Word, MS-Excel, MS-PowerPoint Solutions",
    icon: "/assets/images/icons/services/software.png",
    backImage: "/assets/images/background/services/software.jpg",
    url: whatsappLink,
    buttonText: "Request a Quote",
  },
  {
    heading: "business assignments",
    description: "Excel in Business Studies: Your Assignments, Our Expertise.",
    icon: "/assets/images/icons/services/business.png",
    backImage: "/assets/images/background/services/business.jpg",
    url: whatsappLink,
    buttonText: "Request a Quote",
  },
  {
    heading: "economics assignments",
    description: "Achieve Top Grades: Elevate Your Economics Assignments!",
    icon: "/assets/images/icons/services/economics.svg",
    backImage: "/assets/images/background/services/economics.jpg",
    url: whatsappLink,
    buttonText: "Request a Quote",
  },
];

export const servicesItemsMain = [
  {
    heading: "Web Development",
    description:
      "Empowering Students: Crafting Web Solutions for Academic Excellence.",
    icon: "/assets/images/icons/services/web.png",
    url: whatsappLink,
  },
  {
    heading: "Graphic Designing",
    description:
      "Elevating Creativity: Transforming Ideas into Striking Visuals.",
    icon: "/assets/images/icons/services/graphic.png",
    url: whatsappLink,
  },
  {
    heading: "English",
    description:
      "Elevating Your English Assignments: Quality and Excellence Delivered.",
    icon: "/assets/images/icons/services/english.svg",
    url: whatsappLink,
  },
  {
    heading: "Microsoft Office",
    description: "MS-Word, MS-Excel, MS-PowerPoint Solutions",
    icon: "/assets/images/icons/services/software.png",
    url: whatsappLink,
  },
  {
    heading: "business studies",
    description: "Excel in Business Studies: Your Assignments, Our Expertise.",
    icon: "/assets/images/icons/services/business.png",
    url: whatsappLink,
  },
  {
    heading: "economics",
    description: "Achieve Top Grades: Elevate Your Economics Assignments!",
    icon: "/assets/images/icons/services/economics.svg",
    url: whatsappLink,
  },
  {
    heading: "app Development",
    description:
      "Transforming Your Ideas into Innovative Mobile Solutions for Better Grades.",
    icon: "/assets/images/icons/services/app.svg",
    url: whatsappLink,
  },
  {
    heading: "Hotel Management",
    description:
      "Unlocking Success in Hotel Management Courses with Expert Assignment Solutions",
    icon: "/assets/images/icons/services/hotel.svg",
    url: whatsappLink,
  },
  {
    heading: "Accountany",
    description:
      "Excel in Accountancy Courses with Top-Grade Assignment Solutions.",
    icon: "/assets/images/icons/services/accounts.svg",
    url: whatsappLink,
  },
  {
    heading: "Mathematics",
    description:
      "Enhancing Your Academic Performance Through Specialized Math Assignments Assistance.",
    icon: "/assets/images/icons/services/math.png",
    url: whatsappLink,
  },
];

export const testimonials = [
  {
    name: "Gurpreet Singh",
    city: "Brampton",
    image: "/assets/images/background/testimonial/gopi.png",
    desc: "I used to struggle with completing my projects on time, but HelpMeFolks has made it so much easier. I highly recommend it to all college students",
    stars: 5,
    flag: "/assets/images/background/testimonial/canada.png",
  },
  {
    name: "Manpreet Singh",
    city: "Winipeg",
    image: "/assets/images/background/testimonial/manpreet.png",
    desc: "I love how easy it is to find resources and connect with experts on HelpMeFolks. It has made my college projects much more manageable.",
    stars: 5,
    flag: "/assets/images/background/testimonial/canada.png",
  },
  {
    name: "Dhruv Rajput",
    city: "Surrey",
    image: "/assets/images/background/testimonial/dhruv.jpg",
    desc: "I was able to complete my project on time with the help of HelpMeFolks. Thank you!",
    stars: 5,
    flag: "/assets/images/background/testimonial/canada.png",
  },
  {
    name: "Umneet Singh",
    city: "Surrey",
    image: "/assets/images/background/testimonial/umneet.png",
    desc: "HelpMeFolks exceeded our expectations with their Python project. Excellent work, attention to detail, and timely delivery. Highly recommended for all your coding needs!",
    stars: 5,
    flag: "/assets/images/background/testimonial/canada.png",
  },
  {
    name: "Rajat",
    city: "Surrey",
    image: "/assets/images/background/testimonial/rajat.jpg",
    desc: "I wish I had discovered HelpMeFolks earlier. It saved me so much time and stress during my final year projects.",
    stars: 5,
    flag: "/assets/images/background/testimonial/canada.png",
  },
];

export const contactItems = [
  {
    content: whatsappNumber,
    icon: <MdOutlineWhatsapp />,
    url: whatsappLink,
  },
  {
    content: email,
    icon: <MdOutlineEmail />,
    url: emailLink,
  },
  {
    content: "Sector 10, Chandigarh",
    icon: <MdLocationOn />,
  },
  {
    content: whatsappNumber,
    icon: <BiPhoneCall />,
    url: `tel:${whatsappNumber}`,
  },
];
