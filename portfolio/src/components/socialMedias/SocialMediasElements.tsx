import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import SocialMediaIcon from "./socialMediaIcon/SocialMediaIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { socialMedias } from "../../shared/constants/socialMedias";

const SocialMediasElements = () => {
  return (
    <>
      <SocialMediaIcon url={socialMedias.github}>
        <GitHubIcon />
      </SocialMediaIcon>
      <SocialMediaIcon url={socialMedias.facebook}>
        <FacebookIcon />
      </SocialMediaIcon>
      <SocialMediaIcon url={socialMedias.linkedin}>
        <LinkedInIcon />
      </SocialMediaIcon>
      <SocialMediaIcon url={socialMedias.instagram}>
        <InstagramIcon />
      </SocialMediaIcon>
    </>
  );
};

export default SocialMediasElements;
