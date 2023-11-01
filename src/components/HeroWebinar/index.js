import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton,WhatsappButton } from './HeroStyle2'
import HeroImg from '../../images/Webinar.jpg'
import Typewriter from 'typewriter-effect';
import { Bio2 } from '../../data/constants';

const HeroWebinar = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hey, Wanna<br /> {Bio2.name}</Title>
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
                        <WhatsappButton href={Bio2.whatsapp} target='display'>Click here for Webinar!</WhatsappButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        {/* <Img src={HeroImg} alt="hero-image" /> */}
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroWebinar