import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav className="flex justify-start items-center absolute top-0 left-[7%] w-full pt-[50px]">
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
      <main className="bg-blue  w-full">
        <section className="hero pt-[255px] pl-[7%] relative h-[875px] overflow-hidden">
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

          <div className="profile grid grid-cols-2 relative z-10 w-full bg-white py-[84px] px-[7%]">
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
        </section>

        <section className="projects">

        </section>
      </main>
    </>
  );
}

export default App;
