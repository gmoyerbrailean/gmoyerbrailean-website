import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function StyledLink(props: Props) {
  return(
    <a
      href={props.href}
      target="blank"
      className="text-[#1a906c] dark:text-[#5C8DC5] dark:hover:text-[#AD9E90]"
    >
      {props.children}
    </a>
  )
};