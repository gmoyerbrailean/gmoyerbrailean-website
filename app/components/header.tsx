'use client'

import { useVisibleSection } from "@/app/hooks/useVisibleSection";

export default function Header() {

  const sections = ["home", "projects"];
  const activeSection = useVisibleSection(sections);
  
  const HeaderLink = (props: {
    target: string;
    text: string;
    isActive: boolean
  }) => {
    const styles = `mx-4 ${props.isActive ? 'underline' : 'no-underline'} hover:underline`;
    return(
      <button className={styles} onClick={() => {
        document.getElementById(props.target)?.scrollIntoView();
      }}>{props.text}</button>
    )
  }
  
  return(
    <div className="hidden md:block fixed top-0 w-full h-[60px] bg-[var(--background)] border-b-1">
      <div className="flex h-full justify-center mr-4">
        <HeaderLink target="home" text="Home" isActive={activeSection === "home"} />
        <HeaderLink target="projects" text="Projects" isActive={activeSection === "projects"} />
      </div>
    </div>
  )
}