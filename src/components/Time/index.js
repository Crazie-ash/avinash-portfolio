import React, { useState } from 'react';
import moment from 'moment'; // Import moment library for date calculations
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimeCard from '../Cards2/TimeCard.jsx';
import { time } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

const SkillsTitle = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const Index = () => {
    const [selectedTime, setSelectedTime] = useState(null);

    // Calculate the absolute difference in days, hours, and minutes since '2018-12-01'
    const startDate = moment('2023-12-30 18:00:00'); // '18:00:00' represents 6 PM
    const currentDate = moment();
    const duration = moment.duration(currentDate.diff(startDate));

    const daysSinceStart = Math.abs(duration.asDays());
    const hoursSinceStart = Math.abs(duration.hours());
    const minutesSinceStart = Math.abs(duration.minutes());

    // Format the startDate to display as '6:00 PM'
    const formattedStartDate = startDate.format('h:mm A');

    return (
        <Container id="workshop">
            <Wrapper>
                <Title>Engage with Our Exclusive Complimentary Webinar Experience.</Title>

                <SkillsContainer>
                    <SkillsTitle>Don't miss this Webinar</SkillsTitle>
                    <Desc>
                        {/* Display the start date here */}
                        <p>Webinar Starts on: {startDate.format('YYYY-MM-DD')}</p><br></br>
                        <p>Webinar Time: {formattedStartDate}</p><br></br>

                        {/* Display days, hours, and minutes since the start date */}
                        <p style={{
                            display: 'inline-block',
                            marginRight: '10px',
                            // backgroundColor: 'red',
                            color: 'white',
                            borderRadius: '30px',
                            boxShadow: '1px 1px 12px yellow'
                        }}>{Math.floor(daysSinceStart)} days</p>

                        <p style={{
                            display: 'inline-block',
                            marginRight: '10px',
                            backgroundColor: 'blue',
                            color: 'white',
                            // border: '1px solid #000',
                            boxShadow: '5px 5px 5px #888'
                        }}>{hoursSinceStart} hours</p>

                        <p style={{
                            display: 'inline-block',
                            backgroundColor: 'green',
                            color: 'white',
                            // border: '1px solid #000',
                            boxShadow: '5px 5px 5px #888'
                        }}>{minutesSinceStart} minutes</p>
                    </Desc>
                </SkillsContainer>

                <TimelineSection>
                    <Timeline>
                        {time.map((Time, index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== time.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <TimeCard Time={Time} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>

            </Wrapper>
        </Container>
    );
};

export default Index;
