import { IconBooks, IconBrandGithub, IconBrandInstagram, 
  IconBrandLinkedin, IconBrandStrava 
} from "@tabler/icons-react";

import StyledLink from "@/app/ui/StyledLink";

export default function LinkBar() {
  return(
    <div className="w-full flex justify-around md:justify-center">

      <StyledLink href="https://www.linkedin.com/in/gmoyerbrailean/">
        <IconBrandLinkedin size={26} className="md:mx-2" />
      </StyledLink>
      
      <StyledLink href="https://github.com/gmoyerbrailean/">
        <IconBrandGithub size={26} className="md:mx-2" />
      </StyledLink>
      
      <StyledLink href="https://www.instagram.com/gmoyerbrailean">
        <IconBrandInstagram size={26} className="md:mx-2" />
      </StyledLink>

      <StyledLink href="https://www.strava.com/athletes/121328491">
        <IconBrandStrava size={26} className="md:mx-2" />
      </StyledLink>

      <StyledLink href="https://app.thestorygraph.com/profile/gmoyerbrailean">
        <IconBooks size={26} className="md:mx-2" />
      </StyledLink>

    </div>
  );
}