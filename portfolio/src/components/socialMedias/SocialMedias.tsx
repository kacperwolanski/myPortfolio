import React from "react";
import { SocialMediasContainer } from "./socialMedias.styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import SocialMediaIcon from "./socialMediaIcon/SocialMediaIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Resume from "./resume/Resume";
const SocialMedias = () => {
  return (
    <SocialMediasContainer>
      <SocialMediaIcon url="https://imagecolorpicker.com/">
        <GitHubIcon />
      </SocialMediaIcon>
      <SocialMediaIcon url="https://imagecolorpicker.com/">
        <FacebookIcon />
      </SocialMediaIcon>
      <SocialMediaIcon url="https://imagecolorpicker.com/">
        <LinkedInIcon />
      </SocialMediaIcon>
      <SocialMediaIcon url="https://imagecolorpicker.com/">
        <InstagramIcon />
      </SocialMediaIcon>
      <SocialMediaIcon url="https://imagecolorpicker.com/">
        <EmailIcon />
      </SocialMediaIcon>
      <Resume />
    </SocialMediasContainer>
  );
};

export default SocialMedias;
