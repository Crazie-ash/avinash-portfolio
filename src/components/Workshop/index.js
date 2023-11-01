import React from 'react';
import HeroWebinar from '../HeroWebinar';
import Skills from '../Skills';
import Experience from '../Experience';
import Projects from '../Projects';
import Education from '../Education';
import ContactWebinar from '../ContactWebinar';
import styled from 'styled-components';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(204, 0, 187, 0.15) 0%,
    rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 60%,
    rgba(0, 70, 209, 0.15) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Workshop = () => (
  <div>
     <Body>
    <HeroWebinar />
    <Wrapper>
    {/* <Skills />
    <Experience /> */}
    {/* </Wrapper> */}
    {/* <Projects /> */}
    {/* <Wrapper> */}
    {/* <Education /> */}
    <ContactWebinar />
    </Wrapper>
    </Body>
  </div>
);

export default Workshop;