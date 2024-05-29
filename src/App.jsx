import "./App.css";
import Service from "./components/service";

function App() {
  return (
    <>
      <header>
        <nav className="flex justify-start items-center absolute top-0 left-[7%] w-full pt-[50px] z-10">
          <a href="/">
            <img src="/images/intecon-logo.png" alt="intecon logo" />
          </a>
          <ul className="navlinks flex justify-start items-center gap-6">
            <li className="uppercase ">
              <a href="/" className="no-underline text-white text-[14px]">
                Home
              </a>
            </li>
            <li className="uppercase  ">
              <a href="/" className="no-underline text-white text-[14px]">
                About
              </a>
            </li>
            <li className="uppercase  ">
              <a href="/" className="no-underline text-white text-[14px]">
                Projects
              </a>
            </li>
            <li className="uppercase  ">
              <a href="/" className="no-underline text-white text-[14px]">
                Services
              </a>
            </li>
            <li className="uppercase  ">
              <a href="/" className="no-underline text-white text-[14px]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="w-full">
        <section className="hero pt-[255px] pl-[7%] relative h-[875px] overflow-hidden bg-blue">
          <div className="hero-text mb-[88px]">
            <span className="uppercase text-white font-normal text-[36px]">
              We are
            </span>
            <h1 className="text-white text-[96px] max-w-[550px] leading-[90%] -tracking-[3.84px] font-jost">
              Intecon Partnership Ltd
            </h1>
            <p className="text-white capitalize text-[48px] -tracking-[4%]">
              consulting Engineers
            </p>
            <span className="text-white text-[20px]">
              ISO 9001:2015 Certified | RC 311767
            </span>
          </div>
          <div className="hug flex flex-row justify-between items-center z-10">
            <button className="scroll-down relative w-[156px] h-[74px] border border-border rounded-[10px]">
              <span className="absolute w-full top-4 left-4 -tracking-[4%] text-base text-white text-left leading-[90%]">
                Scroll Down
              </span>
              <img
                src="/images/arrow-down.svg"
                alt="arrow down"
                className="absolute bottom-[10px] right-[10px] "
              />
            </button>
            <a
              href="/contact"
              className="contact text-white relative mr-[17.5%] w-[264px] h-[70px] block border border-border rounded-[10px] bg-darkblue z-10"
            >
              <span className="absolute w-full top-4 left-4 -tracking-[4%] text-base text-white text-left leading-[90%]">
                Contact Us
              </span>
              <div className="phone-box absolute bottom-[10px] right-[10px] grid place-items-center bg-white rounded-full p-[5px]">
                <img src="/images/Phone.svg" alt="phone icon" />
              </div>
            </a>
          </div>

          <img
            src="/images/hero-image-1.png"
            alt="construction image"
            className="absolute -bottom-0 -right-[338px] h-full block z-1"
          />
        </section>

        <section className="about  bg-white w-full h-full relative overflow-hidden pb-[96px]">
          <div className="background w-[50%] h-[893px] bg-plan bg-cover bg-left-top bg-no-repeat absolute top-0 left-1"></div>
          <div className="background w-[50%] h-[893px] bg-plan-2 bg-cover bg-left-top bg-no-repeat absolute top-[112px] right-0"></div>

          <div className="ellipse w-[1073px] h-[751px] bg-white blur-[300px] absolute -top-[150px] rounded-full z-0"></div>
          <div className="ellipse w-[1073px] h-[751px] bg-white blur-[300px] absolute top-[75px] rounded-full z-0"></div>

          <div className="hug flex flex-row justify-center items-start gap-[5%] pt-[184px] w-full px-[16%] z-100 relative">
            <div className="flex flex-col justify-between items-start gap-4">
              <h2 className="text-[40px] font-semibold font-inter ">
                Our Mission
              </h2>
              <div className="circle w-[102px] h-[98px] rounded-full shadow-inner p-4 grid place-items-center">
                <img src="/images/arrow-right.png" alt="arrow pointing right" />
              </div>
            </div>

            <p className="text-[24px] max-w-[675px] font-jost font-light ">
              Our mission is to provide technically sound engineering services
              on projects, to achieve the production of durable facilities and
              time tested solutions, at optimum costs to clients, and in a
              timely and environmentally friendly manner, utilizing highly
              trained manpower, cutting- edge technology and equipment.
            </p>
          </div>

          <div className="hug flex flex-row justify-between items-start gap-[74px] pt-[102px] px-[16%] relative">
            <p className="text-[24px] max-w-[603px] font-jost font-light ">
              Our vision is to be one of the best consulting engineering firms
              in Africa and beyond, in the delivery of world class engineering
              services.
            </p>

            <div className="flex flex-col justify-center items-start gap-4">
              <h2 className="text-[40px] font-semibold font-inter ">
                Our Vision
              </h2>
              <div className="circle w-[102px] h-[98px] rounded-full shadow-inner p-4 grid place-items-center">
                <img src="/images/arrow-left.png" alt="arrow pointing left" />
              </div>
            </div>
          </div>

          <div className="profile grid grid-cols-2 relative z-10 w-full bg-white py-[84px] px-[7%] gap-x-[5%]">
            <div className="image-box flex flex-col justify-start items-center">
              <div className="image bg-border rounded-[10px] max-w-[505px]">
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
            </div>
            <div className="profile-bio">
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
            </div>
          </div>
          <div className="blue-box w-[34px] h-[142px] bg-edgeblue absolute bottom-6 right-0 z-20"></div>
        </section>

        <section className="projects relative pt-[184px] pb-[139px] px-[230px]">
          <div className="blue-box w-[34px] h-[142px] bg-edgeblue absolute top-[145px] left-0"></div>
          <h3 className="text-[40px] tracking-[14.8px] font-bold font-inter uppercase">
            Projects
          </h3>
          <img
            src="/images/ajayi-crowther-library.png"
            alt="ajayi crowther library"
            className="first-project"
          />
          <img
            src="/images/bowen-library.png"
            alt="bowen library"
            className="second-project"
          />
          <img
            src="/images/natural-science-building.png"
            alt="Ajayi Crowther natural science building"
            className="third-project"
          />
          <img
            src="/images/heritage-mall.png"
            alt="Heritage Mall Dugbe, Ibadan, Oyo State Nigeria"
            className="fourth-project"
          />
          <img
            src="/images/engr-survey.png"
            alt="Engineering Survey"
            className="fifth-project"
          />
          <img
            src="/images/eket-control-tower.png"
            alt="Eket Control Tower"
            className="sixth-project"
          />
          <button className="text-[24px] block font-normal font-jost bg-darkblue py-6 px-[42px] -tracking-[0.96px] rounded text-white mx-auto ">
            See More Projects
          </button>
        </section>

        <section className=" services relative pt-[140px] pb-[177px] px-[11%] bg-edgeblue">
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

        <section className="clients py-[143px]">
          <h3 className="text-[40px] tracking-[14.8px] font-bold font-inter uppercase text-center">
            Our Client
          </h3>
          <div className="marquee-container">
            <div className="marquee">
              <span className="client">
                <img
                  src="/images/coat-of-arms.png"
                  alt="Nigerian coat of arms no background"
                />
              </span>
              <span className="client">
                <img
                  src="/images/exxon.png"
                  alt="ExxonMobil logo png"
                />
              </span>
              <span className="client">
                <img
                  src="/images/p-and-g.png"
                  alt="Procter and gamble logo "
                />
              </span>
              <span className="client">
                <img
                  src="/images/excellence-and-godliness.png"
                  alt="Excellence and godliness logo"
                />
              </span>
              <span className="client">
                <img
                  src="/images/coat-of-arms.png"
                  alt="Nigerian coat of arms no background"
                />
              </span>
            </div>
          </div>
        </section>

        <section className="contact bg-contact relative">
          <div className="contact-head absolute -top-[110px] left-[124px] bg-contact rounded-[15px] py-8 px-[100px] ">
            <p className="font-inter text-[32px] font-medium ">Contact</p>
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
              className="text-[24px] block mx-auto font-normal font-jost bg-darkblue py-6 px-[42px] -tracking-[0.96px] rounded text-white mt-8"
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