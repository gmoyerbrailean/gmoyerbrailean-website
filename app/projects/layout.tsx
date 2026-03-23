'use client'

import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();

  return(
    <>
      <div className="fixed top-0 w-full h-[60px] bg-[var(--background)]">
        <div className="flex h-full justify-start items-center pl-4">
          <button
            onClick={() => router.back()}
            className="flex flex-row hover:underline"
          >
            <IconArrowLeft /> Back
          </button>
        </div>
      </div>

      <div id="home" className="flex flex-col w-[80%] md:w-[60%] m-auto justify-start items-center mt-[60px]">
        {children}
      </div>
    </>
  )
}