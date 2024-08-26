import kia from "./kia seltos.png";
import xuv from "./xuv.png";
import hector from "./hector plus.png";
import creta from "./creta.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { link } from "fs";

const App = () => {
  const data = [
    {
      name: "Kia Seltos",
      image:kia,
      link:"https://www.kia.com/in/vr/showroom/index.html?utm_source=Kia_indea_com&utm_medium=outbound_link&utm_campaign=/in/our-vehicles/seltos/showroom.html&utm_content=Showroom_Page_VR#/showroom"
    
    },
  
    {
      name: "Creta",
      image:creta,
      link:"https://www.hyundai.com/in/en/hyundai-story/webgl?model=CRETA_FACELIFT_2024"
       
    },
    {
      name: "MG Hector ",
      image:hector,
      link:"https://cc.mgmotor.co.in/mgexpert/#/new-hector/home?utm_source=landing&utm_medium=web&utm_campaign=expert"
    
    },
  ];
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Virtual Showroom
          </h2>
        </div>

        <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((x) => (
            <div key={x.name} >
        <a href={x.link} target="blank">
               <Image
               src={x.image}
               width={500}
               height={500}
               alt="#"
               />
               </a>
      
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                      {x.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  
  );
};

export default App;
  {/* <div className="md:grid md:gap-6   mb-12">
            {data.map((x) => {
              return (
                <>
                
                      <Image
                        width={300}
                        height={300}
                        className=" rounded-2xl w-1/2 object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                    
                   
                  
                </>
              );
            })}
          </div> */}