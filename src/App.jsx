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
        <section className="hero pt-[29%] pl-[7%] pb-[15%]">
          <div className="hero-text mb-[88px]">
            <span className="uppercase text-white font-normal text-[36px]">
              We are
            </span>
            <h1 className="text-white text-[96px] max-w-[550px] leading-[90%] -tracking-[4%]">
              Intecon Partnership Ltd
            </h1>
            <p className="text-white capitalize text-[48px] -tracking-[4%]">
              consulting Engineers
            </p>
            <span className="text-white text-[20px]">
              ISO 9001:2015 Certified | RC 311767
            </span>
          </div>
          <div className="hug flex flex-row justify-between items-center">
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
              className="contact text-white absolute right-[17.5%] bottom-0 w-[264px] h-[70px] block border border-border rounded-[10px] bg-darkblue"
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
            className="absolute bottom-0 -right-[338px]"
          />
        </section>
        <section className="about mt-[77px] ">
          <div className="hug">
            <h2 className="text">Our Mission</h2>
            <div className="circle w-[102px] h-[98px] rounded-full shadow-inner"></div>
            <p className="text-base">
              Our mission is to provide technically sound engineering services
              on projects, to achieve the production of durable facilities and
              time tested solutions, at optimum costs to clients, and in a
              timely and environmentally friendly manner, utilizing highly
              trained manpower, cutting- edge technology and equipment.
            </p>
          </div>
          <div className="hug">
          <h2 className="text">Our Mission</h2>
            <div className="circle w-[102px] h-[98px] rounded-full shadow-inner"></div>
            <p className="text-base">
              Our mission is to provide technically sound engineering services
              on projects, to achieve the production of durable facilities and
              time tested solutions, at optimum costs to clients, and in a
              timely and environmentally friendly manner, utilizing highly
              trained manpower, cutting- edge technology and equipment.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
