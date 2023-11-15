import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  SocialsTitle,
  Span,
  SubTitle,
  StyledSocialMedia,
  ResumeButton,
  WhatsappButton,
} from "./HeroStyle2";
import { Mediasymbols } from "./HeroStyle2";
import Typewriter from "typewriter-effect";
import { Bio2 } from "../../data/constants";
import { ProfileCheckButton } from "./HeroStyle2";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiUser } from "react-icons/fi";

import styled from "styled-components";
import { keyframes } from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Bio } from "../../data/constants";



const LargeWhatsappIcon = styled(IoLogoWhatsapp)`
  font-size: 22px;
  margin-left: 6px;
  margin-bottom: 4px;
  vertical-align: middle;
`;

const LargeProfileIcon = styled(FiUser)`
  font-size: 25px;
  margin-left: 6px;
  margin-bottom: 4px;
  vertical-align: middle;
`;

const slideInFromTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;


const HeroWebinar = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hey, Wanna
              <br /> {Bio2.name}
            </Title>
            <TextLoop>
              Learn
              <Span>
                <Typewriter
                  options={{
                    strings: Bio2.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio2.description}</SubTitle>
            {/* <ResumeButton href={Bio2.resume} target='display'>Check Resume</ResumeButton> */}
            <WhatsappButton href={Bio2.whatsapp} target="display">
              Click here for Webinar
              <LargeWhatsappIcon />
            </WhatsappButton>
            <ProfileCheckButton href="/#about">
              Explore My Profile
              <LargeProfileIcon />
            </ProfileCheckButton>
            <SocialsTitle>
              Check out my Socials
            </SocialsTitle>
            <slideInFromTop>
            <Mediasymbols>
              <StyledSocialMedia href={Bio.linkedin} target="_blank">
                <LinkedInIcon />
              </StyledSocialMedia>
              <StyledSocialMedia href={Bio.insta} target="_blank">
                <InstagramIcon />
              </StyledSocialMedia>
              <StyledSocialMedia href={Bio.youtube} target="_blank">
                <YouTubeIcon />
              </StyledSocialMedia>
            </Mediasymbols>
           </slideInFromTop>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            {/* <Img src={HeroImg} alt="hero-image" /> */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroWebinar;
