import React from "react";
import HeroWebinar from "../HeroWebinar";
import Time from "../Time";
import Purpose from "../Purpose";
import Forwhom from "../Forwhom";
import ContactWebinar from "../ContactWebinar";
import styled from "styled-components";
// import Socials from "../socials";
// import { HeroWebinar, Socials }  from "../HeroWebinar"
// import HomeSocial from "../test";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 70%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 60%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const FlexContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const ContactContainer = styled.div`
//   flex: 1;
// `;

// const InformationContainer = styled.div`
//   flex: 1;
  
// `;
const Workshop = () => (
  <div>
    <Body>
      <HeroWebinar />
      {/* <HomeSocial /> */}
      <Wrapper>
        <Time />
      </Wrapper>
      <Purpose />
      <Wrapper>
        <Forwhom />
      </Wrapper>
      {/* <Wrapper> */}
      <ContactWebinar />
      {/* </Wrapper> */}
    </Body>
  </div>
);

export default Workshop;
