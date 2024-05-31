import React from "react";
import { motion } from "framer-motion";

const Service = ({ head, text, img }) => {
  const fadein = {
    hidden: {
      x: "-500px",
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

  const fadeintoo = {
    hidden: {
      x: "500px",
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
  return (
    <div className="service grid grid-cols-2 gap-x-[50px] h-[556px]">
      <motion.div
        className="text"
        variants={fadein}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h4 className=" text-[48px] font-semibold text-white pt-[196px] pb-[29px] max-w-[399px] leading-[50px]">
          {head}
        </h4>
        <p className="font-jost text-[24px] font-light pb-11 text-white max-w-[466px] text-justify">
          {text}
        </p>
        <button className="text-[24px] block font-normal font-jost bg-darkblue py-6 px-[42px] -tracking-[0.96px] rounded text-white">
          Make Enquiries
        </button>
      </motion.div>
      <motion.div
        className="service-image block mt-auto h-[556px] rounded-[10px] overflow-hidden w-[556px]"
        variants={fadeintoo}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {img && (
          <img
            src={img}
            alt="intecon project"
            className="object-cover h-full w-full"
          />
        )}
      </motion.div>
    </div>
  );
};

export default Service;
