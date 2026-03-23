import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import Badge from "@/app/ui/badge";

interface Props {
  img: StaticImageData;
  title: string;
  alt: string;
  imgtitle?: string;
  darkmask?: boolean;
  badges: string[];
  children: ReactNode;
}

export default function ProjectInfo(props: Props) {

  const badges = props.badges.map((i, k) => {
    return <Badge key={k} content={i} />
  });

  return(
      <div className="flex w-[360px] md:w-[720px] my-12" >
        <div className="hidden md:block">
          <Image
            src={props.img.src}
            height={300}
            width={300}
            alt={props.alt}
            title={props.imgtitle}
            className={props.darkmask ? "dark:bg-white/20" : ""}
          />
        </div>

        <div className="flex flex-col justify-start items-center md:items-start w-full mx-8"> 
          
          <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
          <div className="flex flex-wrap justify-center md:justify-start mb-4">
            {badges}
          </div>
          
          <div className="block md:hidden mb-4">
            <Image
              src={props.img.src}
              height={200}
              width={200}
              alt={props.alt}
              className={props.darkmask ? "dark:bg-white/20" : ""}
              />
          </div>
          
          {props.children}

        </div>
      </div>
  )
};