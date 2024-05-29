import React from 'react'

const Service = ({head,text,img}) => {
  return (
    <div className="service grid grid-cols-2 gap-x-[50x] mb-[101px] h-[556px]">
            <div className="text">
              <h4 className=" text-[48px] font-semibold text-white pt-[196px] pb-[29px] max-w-[399px]">{head}</h4>
              <p className="font-jost text-[24px] font-light pb-11 text-white max-w-[466px] text-justify">{text}</p>
              <button className="text-[24px] block font-normal font-jost bg-darkblue py-6 px-[42px] -tracking-[0.96px] rounded text-white">Make Enquiries</button>
            </div>
            <div className="service-image block mt-auto h-[556px] rounded-[10px] overflow-hidden w-[556px]">
              {img && <img src={img} alt="intecon project" className="object-cover h-full w-full"/>}
            </div>
          </div>
  )
}

export default Service
