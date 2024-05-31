import React, { useState, useEffect } from "react";
import "./App.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Service from "./components/service";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: "/images/hero-image-1.png" },
    { id: 2, image: "/images/hero-image-2.png" },
    { id: 3, image: "/images/hero-image-3.png" },
    // Add more slides here
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  const fadein = {
    hidden: {
      x: -500,
      opacity: 0.5,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const fadeup = {
    hidden: {
      y: "500px",
      opacity: 0.75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const fadedown = {
    hidden: {
      y: -300,
      opacity: 0.25,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const stagger = {
    hidden: {
      opacity: 1,
    },
    visible: {
      transition: {
        staggerChildren: 1,
        delayChildren: 1,
      },
    },
  };

  const fadeintoo = {
    hidden: {
      x: 500,
      opacity: 0.75,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const contact = {
    hidden: {
      x: 500,
      opacity: 0.75,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const scroll = {
    hidden: {
      y: "100px",
      opacity: 0.5,
      scale: 1.3,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <>
      <header className="relative">
        <nav className="flex justify-start items-center absolute top-0 left-[7%] w-full pt-[50px] z-10">
          <a href="/">
            <img src="/images/intecon-logo.png" alt="intecon logo" />
          </a>
          <ul className="navlinks flex justify-start items-center gap-6">
            <li className="uppercase ">
              <a
                href="/"
                className="no-underline text-white text-[14px] font-inter hover:font-bold"
              >
                Home
              </a>
            </li>
            <li className="uppercase  ">
              <a
                href="/"
                className="no-underline text-white text-[14px] font-inter hover:font-bold"
              >
                About
              </a>
            </li>
            <li className="uppercase  ">
              <a
                href="/"
                className="no-underline text-white text-[14px] font-inter hover:font-bold"
              >
                Projects
              </a>
            </li>
            <li className="uppercase  ">
              <a
                href="/"
                className="no-underline text-white text-[14px] font-inter hover:font-bold"
              >
                Services
              </a>
            </li>
            <li className="uppercase  ">
              <a
                href="/"
                className="no-underline text-white text-[14px] font-inter hover:font-bold"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="w-full">
        <section className="hero pt-[255px] pl-[7%] relative h-[875px] overflow-hidden bg-blue">
          <motion.div
            className="hero-text mb-[88px]"
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="uppercase text-white font-inter font-normal text-[36px]">
              We are
            </span>
            <h1 className="text-white text-[96px] max-w-[550px] leading-[90%] -tracking-[3.84px] font-jost">
              Intecon Partnership Ltd
            </h1>
            <p className="text-white capitalize text-[48px] -tracking-[1.72px] font-jost">
              consulting Engineers
            </p>
            <span className="text-white text-[20px]">
              ISO 9001:2015 Certified | RC 311767
            </span>
          </motion.div>
          <div className="hug flex flex-row justify-between items-center z-10">
            <motion.a
              className="scroll-down relative w-[156px] h-[74px] border border-border rounded-[10px]"
              variants={scroll}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="#about"
            >
              <span className="absolute w-full top-4 left-4 -tracking-[0.64px] text-base text-white text-left leading-[90%] font-jost">
                Scroll Down
              </span>
              <img
                src="/images/arrow-down.svg"
                alt="arrow down"
                className="arrow-down absolute bottom-[10px] right-[10px] "
              />
            </motion.a>
            <motion.a
              variants={contact}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="/contact"
              className="contact-btn text-white relative mr-[8.5%] w-[264px] h-[70px] block border-0 rounded-[10px] transition bg-darkblue hover:bg-hoverblue z-10"
            >
              <span className="contact-text absolute w-full top-4 left-4  text-base text-white text-left leading-[90%]leading-[90%] -tracking-[0.64px] font-jost">
                Contact Us
              </span>
              <div className="phone-box absolute bottom-[10px] right-[10px] grid place-items-center bg-white rounded-full p-[5px]">
                <img src="/images/phone.svg" alt="phone icon" />
              </div>
            </motion.a>
          </div>
          <motion.div
            className=" slider absolute bottom-[120px] -right-[438px] scale-[1.2] h-full block z-1"
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={`Slide ${slide.id}`}
                // style={{ display: index === currentSlide ? 'block' : 'none' }}
                className={`carousel-slide ${
                  index === currentSlide ? "active" : ""
                }`}
              />
            ))}
          </motion.div>
        </section>

        <section
          className="about  bg-white w-full h-full relative overflow-hidden pb-[96px]"
          id="about"
        >
          <div className="background w-[50%] h-[893px] bg-plan bg-cover bg-left-top bg-no-repeat absolute top-0 left-1"></div>
          <div className="background w-[50%] h-[893px] bg-plan-2 bg-cover bg-left-top bg-no-repeat absolute top-[112px] right-0"></div>

          <div className="ellipse w-[1073px] h-[751px] bg-white blur-[300px] absolute -top-[150px] rounded-full z-0"></div>
          <div className="ellipse w-[1073px] h-[751px] bg-white blur-[300px] absolute top-[75px] rounded-full z-0"></div>

          <div className="hug flex flex-row justify-center items-start gap-[5%] pt-[184px] w-full px-[16%] z-100 relative">
            <motion.div
              variants={fadein}
              initial={{ x: -200, opacity: 1 }}
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col justify-between items-start gap-4 relative z-50"
            >
              <h2 className="text-[40px] font-semibold font-inter ">
                Our Mission
              </h2>
              <div className="circle w-[102px] h-[98px] rounded-full shadow-inner p-4 grid place-items-center">
                <div className="arrow-box w-[66px] h-[66px] rounded-full border border-border grid place-items-center">
                  <img
                    src="/images/arrow-right.svg"
                    alt="arrow pointing right"
                  />
                </div>
              </div>
            </motion.div>

            <motion.p
              className="text-[24px] max-w-[675px] font-jost font-light "
              variants={fadein}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our mission is to provide technically sound engineering services
              on projects, to achieve the production of durable facilities and
              time tested solutions, at optimum costs to clients, and in a
              timely and environmentally friendly manner, utilizing highly
              trained manpower, cutting- edge technology and equipment.
            </motion.p>
          </div>

          <motion.div
            className="hug flex flex-row justify-between items-start gap-[74px] pt-[102px] px-[16%] relative"
            variants={fadeintoo}
            initial={{ x: 200, opacity: 1, transitionDelay: 0.5 }}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-[24px] max-w-[603px] font-jost font-light "
              variants={fadeintoo}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our vision is to be one of the best consulting engineering firms
              in Africa and beyond, in the delivery of world class engineering
              services.
            </motion.p>

            <div className="flex flex-col justify-center items-end gap-4">
              <h2 className="text-[40px] font-semibold font-inter ">
                Our Vision
              </h2>
              <div className="circle w-[102px] h-[98px] rounded-full shadow-inner p-4 grid place-items-center">
                <div className="arrow-box w-[66px] h-[66px] rounded-full border border-border grid place-items-center">
                  <img src="/images/arrow-left.svg" alt="arrow pointing left" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="profile grid grid-cols-2 relative z-10 w-full bg-white py-[84px] px-[7%] gap-x-[5%]">
            <motion.div
              className="image-box flex flex-col justify-start items-center"
              variants={fadein}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="profile-image bg-border rounded-[10px] max-w-[505px]">
                <img
                  src="/images/engr-ajibola.png"
                  alt="Intecon Engineer Ajibola's Profile Picture"
                />
              </div>
              <p className="profile-name font-inter text-[32px] font-semibold block mt-6">
                Engr. O.A. Ajibola{" "}
                <span className="italic font-medium">FNSE</span>
              </p>
              <p className="font-inter text-[32px] italic block mt-[9px] opacity-75">
                {" "}
                Chairman
              </p>
            </motion.div>
            <motion.div
              className="profile-bio"
              variants={fadeup}
              initial="hidden"
              whileInView={{
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              viewport={{ once: true }}
            >
              <p className="text-[24px] font-jost font-light pb-6 ">
                INTECON PARTNERSHIP was established in 1976 by highly qualified
                Nigerian professional engineers with local and international
                experience to provide top quality consulting engineering
                services to the construction industry. The firm that started as
                a partnership has since grown into a limited liability company
                with enhanced capacity for large scale projects.
              </p>
              <p className="text-[24px] font-jost font-light pb-6">
                Over the years, INTECON has developed to become the leading
                Nigerian consulting engineering firms, specializing in project
                conceptualization, feasibility studies, pre-engineering studies
                including topographical survey and geotechnical investigation,
                detailed engineering Designs, material and soil testing,
                Environmental and waste management, quality assurance/quality
                control supervision and project management.
              </p>
              <p className="text-[24px] font-jost font-light pb-6">
                Towards actualizing our dream of been a competitive global
                player and an international firm, INTECON has built good
                relationships with some foreign firms with capabilities in
                specialized engineering fields and in project management. These
                relationships have led to collaborations on project which have
                seen us maximizing professional inputs and capacity build-up.
              </p>
            </motion.div>
          </div>
          <div className="blue-box w-[34px] h-[142px] bg-edgeblue absolute bottom-6 right-0 z-20"></div>
        </section>

        <section className="projects relative z-100 pt-[184px] pb-[139px] px-[230px]  h-[2100px]">
          <div className="blue-box w-[34px] h-[142px] bg-edgeblue absolute top-[145px] left-0"></div>
          <h3 className="text-[40px] tracking-[14.8px] font-bold font-inter uppercase">
            Projects
          </h3>
          <motion.div
            className="h-full w-full"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            staggerchildren={0.3}
          >
            <motion.img
              variants={fadedown}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="/images/ajayi-crowther-library.png"
              alt="ajayi crowther library"
              className="first-project absolute top-[145px] right-[16%]"
            />
            <motion.img
              variants={fadedown}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="/images/bowen-library.png"
              alt="bowen library"
              className="second-project absolute top-[470px] left-[16%]"
            />
            <motion.img
              variants={fadedown}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="/images/natural-science-building.png"
              alt="Ajayi Crowther natural science building"
              className="third-project absolute top-[818px] right-[17%]"
            />
            <motion.img
              variants={fadedown}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="/images/heritage-mall.png"
              alt="Heritage Mall Dugbe, Ibadan, Oyo State Nigeria"
              className="fourth-project absolute top-[818px] left-[16%]"
            />
            <motion.img
              variants={fadedown}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="/images/engr-survey.png"
              alt="Engineering Survey"
              className="fifth-project absolute top-[1377px] left-[16%]"
            />
            <motion.img
              variants={fadedown}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="/images/eket-control-tower.png"
              alt="Eket Control Tower"
              className="sixth-project absolute top-[1426px] right-[16%]"
            />
          </motion.div>

          <button className=" project-btn text-[24px] grid place-items-center font-normal font-jost transition bg-darkblue hover:bg-hoverblue py-6 px-[42px] -tracking-[0.96px] rounded text-white absolute bottom-[139px]] left-[50%] -translate-x-[50%]">
            <span className="project-btn-text">See More Projects</span>
          </button>

          <motion.img
            src="/images/intecon-thick.png"
            alt="intecon logo"
            className="w-full h-full absolute -left-[784px] -bottom[365px] -z-[1]"
          />
          <img
            src="/images/intecon-thick.png"
            alt="intecon logo"
            className="w-full h-full absolute -right-[498px] -bottom-[1093px] -z-[1]"
          />
        </section>

        <section className=" services relative pt-[140px] pb-[177px] px-[11%] bg-edgeblue overflow-hidden">
          <h3 className="text-[40px] absolute top-[140px] left-[164px] tracking-[14.8px] font-bold font-inter uppercase text-white">
            Services
          </h3>
          <Service
            head="Highway"
            text="Intecon specializes in designing and constructing robust structures that withstand the test of time, from towering skyscrapers to intricate bridges, blending innovation with structural integrity."
            img="/images/highway.png"
          />
          <Service
            head="Structure"
            text="Intecon specializes in designing and constructing robust structures that withstand the test of time, from towering skyscrapers to intricate bridges, blending innovation with structural integrity."
            img="/images/structure.png"
          />
          <Service
            head="Geotechnic"
            text="Intecon's geotechnical expertise lies in understanding the Earth's complexities to ensure stable and sustainable construction, offering comprehensive solutions for soil mechanics, foundation design, and ground improvement."
            img="/images/geotechnic.png"
          />
          <Service
            head="Non-destructive 
          testing"
            text="With advanced non-destructive testing techniques, Intecon ensures the structural integrity and safety of infrastructure without causing damage, employing cutting-edge methods to assess material properties and detect flaws."
            img="/images/testing.png"
          />
        </section>

        <section className="clients py-[69px]">
          <h3 className="text-[40px] tracking-[14.8px] font-bold font-inter uppercase text-center">
            Our Clients
          </h3>
          <div className="marquee-container relative -z-[1] pt-[88px] pb-[124px]">
            <Marquee speed={250}>
              <span className="client">
                <img
                  src="/images/coat-of-arms.png"
                  alt="Nigerian coat of arms no background"
                />
              </span>
              <span className="client">
                <img src="/images/exxon.png" alt="ExxonMobil logo png" />
              </span>
              <span className="client">
                <img src="/images/p-and-g.png" alt="Procter and gamble logo " />
              </span>
              <span className="client">
                <img
                  src="/images/excellence-and-godliness.png"
                  alt="Excellence and godliness logo"
                />
              </span>
              <span className="client">
                <img
                  src="/images/unibadan-logo.png"
                  alt="University of Ibadan logo"
                />
              </span>
              <span className="client">
                <img
                  src="/images/oodua.png"
                  alt="O'dua Investment company Limited"
                />
              </span>
              <span className="client">
                <img src="/images/updc.png" alt="updc logo" />
              </span>
              <span className="client">
                <img
                  src="/images/ajayi-crowther-logo.png"
                  alt="Ajayi Crowther University Logo"
                />
              </span>
              <span className="client">
                <img src="/images/faan.png" alt="FAAN Logo" />
              </span>
              <span className="client">
                <img src="/images/unilever.png" alt="Unilever Logo" />
              </span>
            </Marquee>
          </div>
        </section>

        <section className="contact bg-contact relative">
          <div className="contact-head absolute -top-[110px] left-[124px] bg-contact rounded-[15px] py-8 px-[100px] ">
            <p className="font-inter text-[32px] font-medium ">Contact Us</p>
          </div>
          <form
            action=""
            className="grid w-full max-w-[583px] m-auto pt-[88px] pb-[45px]"
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              <div className="input-grp">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full py-[14px] px-[28px] rounded-[10px]"
                  required
                />
              </div>

              <div className="input-grp">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full py-[14px] px-[28px] rounded-[10px]"
                  required
                />
              </div>

              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                className="w-full py-[14px] px-[28px] h-[195px] col-span-full col-start-1 col-end-3 rounded-[10px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-[24px] block mx-auto font-normal font-jost transition bg-darkblue hover:bg-hoverblue py-6 px-[42px] -tracking-[0.96px] rounded text-white mt-8"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="pt-[178px] pb-[98px] px-[128.5px] bg-footer ">
        <img
          src="/images/intecon-logo-too.png"
          alt="intecon pertnership logo"
          className="block mx-auto mb-[42px]"
        />
        <p className="text-center text-white mb-[120px]">
          <span className="font-bold font-inter text-[14px]">
            InteconPartnershipLtd
          </span>{" "}
          ©️ 2024 | All Rights Reserved!
        </p>
        <div className="flex flex-row justify-between items-end">
          <div className="contact-info">
            <div className="contact-email flex flex-row justify-start items-center gap-[28px] mb-8">
              <img src="/images/envelope.svg" alt="envelop icon" />
              <a
                href="mailto:intecon@intecon.com.ng"
                className="text-white underline font-inter text-[18px]"
              >
                intecon@intecon.com.ng
              </a>
            </div>
            <div className="contact-phone flex flex-row justify-start items-center gap-[28px]">
              <img src="/images/phone-too.svg" alt="phone icon" />
              <p className="text-white font-inter text-[18px]">
                +234 803 324 2026, +234 803 328 3101
              </p>
            </div>
          </div>
          <div className="location flex flex-row justify-start items-center gap-[28px]">
            <img src="/images/location.svg" alt="direction icon" />
            <p className="text-white font-inter text-[18px]">
              6 Aperin Street, Off Awolowo Road Old Bodija, Ibadan, Nigeria
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
