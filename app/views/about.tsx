import Image from "next/image";
  
import LinkBar from "@/app/components/linkbar";

import photo from '@/public/images/gmb_bishop_small.jpg';

export default function About() {
  return (
    <div id="home" className="flex flex-col md:flex-row min-h-screen justify-center items-center">
      
      <h1 className="block md:hidden text-center text-4xl mt-8 mb-6 font-bold">Greg Moyerbrailean</h1>
      
      <div className="flex block md:hidden w-[360px] mb-6">
        <LinkBar />
      </div>

      <Image
        src={photo.src}
        alt="Photo of Greg Moyerbrailean smiling, holding a coffee cup in front of a mountain range on a sunny day."
        width={photo.width}
        height={photo.height}
        className="mb-6 md:mb-0"
        loading="eager"
      />
      
      <div className="flex flex-col md:h-[424px] w-[360px] justify-between items-center" >
        
        <h1 className="hidden md:block text-center text-3xl font-bold">Greg Moyerbrailean</h1>
        
        <div className="w-full flex flex-col items-center">
          <p className="text-center mb-0 md:mb-1">Full-stack web & mobile app development</p>
          <p className="text-center italic text-sm w-[80%]">
              React, React Native, Python, SQL, Expo, Next.js, AWS, Vercel
          </p>
        </div>
        
        <hr className="w-[15%] border-[#36454F] my-4 md:my-0" />

        <div className="w-full flex flex-col items-center">
          <p className="text-center mb-1">Yoga instructor</p>
          <p className="text-center italic text-sm">Vinyasa & Restorative</p>
        </div>
        
        <hr className="w-[15%] border-[#36454F] my-4 md:my-0" />
        
        <div className="w-full flex flex-col items-center">
          <p className="text-center mb-1">Past lives</p>
          <p className="text-center italic text-sm my-1">
            Software Product Management, Illumina
          </p>
          <p className="text-center italic text-sm my-1">
            PhD, Molecular Biology & Genetics
          </p>
        </div>

        <div className="hidden md:block w-full">
          <LinkBar />
        </div>

      </div>

    </div>
  );
}
