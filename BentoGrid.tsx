"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  id,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id:number,
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {
  const [copied, setcopied] = useState(false);
  const handleCopy=()=>{
    navigator.clipboard.writeText(`singhnishitajbp1@gmail.com`);
    setcopied(true);
  }
  return (
    <div className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border-white/[0.1]",
        className
      )}
        style={{
                background:' rgb(2,0,36)',
                backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(18,154,206,1) 35%, rgba(0,212,255,1) 100%)'
      }}
     >
      <div className={`${id===6 && "flex justify-center"} h-full`}>
        <div className = "w-full h-full absolute">
          {img &&(
            <img
            src={img}
            alt={img}
            className={cn(imgClassName , 'object-cover,object-center')}
            />

          )}
        </div>
        <div className= {`absolute right-0 bottom-5 ${id===5 && 'w-60 opacity-80'}`}>
          {spareImg&&(
              <img
              src={spareImg}
              alt={spareImg}
              className={ 'object-cover,object-center w-50 h-40'}
            />
            )}

        </div>
        {id===6 &&(
          <BackgroundGradientAnimation>
           {/*<div className="absolute z-50 flex items-center justify-center text-white font-bold">

            </div>*/}
          </BackgroundGradientAnimation>
        )}
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div  className="font-sans font-extralight text-[#c1c2d3] md:max-w-32 md:text-xs lg:text-base  text-sm  z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96  z-10">
          {title}
        </div>

        
        <div>
          {id===2 && <GlobeDemo/>}
          {id===3 && (
            <div className="flex gap-2 lg:gap-3 w-fit absolute right-4 lg:right-6">
              <div className ="flex flex-col gap-2 md:gap-2 lg:gap-2">
                {['Java ','JavaScript','React.js'].map((item)=>(
                  <span key ={item} className=" py-3 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#0d024d]">
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 round-lg text-center bg-[#131631]"/>
                </div> 
                <div className ="flex flex-col md:gap-2 lg:gap-2 gap-2">
                <span className="py-3 px-3 ls:py-3 lg:px-3 round-lg text-center bg-[#131631]"/>
                {['MongoDB ','Next.js','MYSQL'].map((item)=>(
                  <span key ={item} className=" py-3 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#0d024d]">
                    {item}
                  </span>
                ))}
                
                </div> 
              </div>
          )}
          {id===6&& (
            <div className="mt-7 absolut">
              <div className={`absolute -botton-4 right-0`}> 
                <Lottie options={{
                  loop: copied,
                  autoplay:copied,
                  animationData,
                  rendererSettings:{
                     preserveAspectRatio:'xMidYMid slice',
                  }
                }}/>


              </div>
              <MagicButton
              title={copied?'Email copied':'Copy my Email' }
              icon={<IoCopyOutline/>}
              position="left"
              otherClasses="!bg-[#161A31]"
              handleClick={handleCopy}
              
              
              />

            </div>
          )}
        </div>
      
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"/>
        
        
    </div>
  </div>
  
</div>
    

  );
};
