import React, { useState, useEffect } from "react";
import moment from "moment"; // Import moment library for date calculations
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimeCard from "../Cards2/TimeCard.jsx";
import { time } from "../../data/constants";
import { FcCalendar } from "react-icons/fc";

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
  font-size: 30px;
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
  // gap: 12px;
  margin-top: 20px;
`;

const SkillsTitle = styled.div`
  font-size: 33px;
  text-align: center;
  font-weight: 650;
  color: rgb(175 67 165);
`;

const Desc = styled.div`
  font-size: 23px;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

// const BigCheckIcon = styled(FcCalendar)`
//   font-size: 20px;
//   margin-right: 5px;
//   margin-top: 3px;
// }
// `;

const Index = () => {
  // Define startDate and formattedStartDate here
  const startDate = moment("2023-12-01T18:00:00"); // Set your webinar start date and time
  const formattedStartDate = startDate.format("h:mm A"); // Format the start date as needed

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeDiff = startDate - now;

    const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesRemaining = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsRemaining = Math.floor((timeDiff % (1000 * 60)) / 1000);

    setDays(daysRemaining);
    setHours(hoursRemaining);
    setMinutes(minutesRemaining);
    setSeconds(secondsRemaining);
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container id="workshop">
      <Wrapper>
        <Title>ENGAGE WITH OUR EXCLUSIVE WEBINAR EXPERIENCE</Title>

        <SkillsContainer>
          <SkillsTitle>SEIZE THE WEBINAR MOMENT!</SkillsTitle>

          <Desc>
            {/* Display the start date here */}
            <p>
              Webinar Starts on:{" "}
              <span
                style={{
                  fontWeight: "700",
                  backgroundColor: "rgb(90 61 143/50%)",
                  color: "white",
                  padding: "5px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  marginRight: "10px",
                  borderRadius: "150px",
                }}
              >
                {startDate.format("DD-MM-YYYY")}
              </span>
            </p>
            <br></br>

            <p>
              Time:{" "}
              <span
                style={{
                  fontWeight: "700",
                  backgroundColor: "rgb(90 61 143/50%)",
                  color: "white",
                  padding: "5px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  marginRight: "10px",
                  borderRadius: "150px",
                }}
              >
                {formattedStartDate}
              </span>
            </p>
            <br></br>

            {/* Display days, hours, and minutes since the start date */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <FcCalendar style={{ fontSize: "40px", marginRight: "10px" }} />{" "}
              {/* Adjust the font size and margin as needed */}
              <p
                style={{
                  backgroundColor: "#852a81",
                  color: "white",
                  padding: "10px",
                  marginRight: "10px",
                  borderRadius: "7px",
                }}
              >
                {days} Days
              </p>
              <p
                style={{
                  backgroundColor: "#852a81",
                  color: "white",
                  padding: "10px",
                  marginRight: "10px",
                  borderRadius: "7px",
                }}
              >
                {hours} Hrs
              </p>
              <p
                style={{
                  backgroundColor: "#852a81",
                  color: "white",
                  padding: "10px",
                  marginRight: "10px",
                  borderRadius: "7px",
                }}
              >
                {minutes} Mins
              </p>
              <p
                style={{
                  backgroundColor: "#852a81",
                  color: "white",
                  padding: "10px",
                  marginRight: "10px",
                  borderRadius: "7px",
                }}
              >
                {seconds} Sec
              </p>
            </div>
          </Desc>
        </SkillsContainer>

        <TimelineSection>
          <Timeline>
            {time.map((Time, index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== time.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
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
