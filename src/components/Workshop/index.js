import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from '../Projects/ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { workshop } from '../../data/constants';

const Workshop = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="workshop">
      <Wrapper>
        <Title>Vishnu</Title>
        <Desc>
          I have worked on a wide range of projects, from web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          )}
          <Divider />
          {toggle === 'web app' ? (
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          )}
          <Divider />
          {toggle === 'android app' ? (
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          ) : (
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          )}
          <Divider />
          {toggle === 'machine learning' ? (
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          ) : (
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && workshop.map((project) => (
            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
          {workshop.filter((item) => item.category === toggle).map((project) => (
            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Workshop;
