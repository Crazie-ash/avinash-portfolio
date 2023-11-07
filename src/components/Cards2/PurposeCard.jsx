import React from 'react';
import styled from 'styled-components';
import { VscCode } from "react-icons/vsc";

const Span = styled.span`
  overflow: visible;
  white-space: pre-line; /* Preserve new lines */
`;

const Card = styled.div`
  width: 650px;
  border-radius: 30px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  box-shadow: inset rgb(66 38 75) -1px -1px 7px 4px;

  @media (max-width: 768px) {
    width: 348px;
    max-width: 100%; /* Make the card take full width on smaller screens */
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  gap: 12px;
  justify-content: center; /* Center items horizontally */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    align-items: center; /* Center items vertically */
  }
`;


const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: rgba(242, 243, 244, 0.584);
  font-size: 24px;
  font-weight: 550;

  @media (max-width: 768px) {
    font-size: 20px; /* Adjust font size for smaller screens */
  }
`;



const PurposeCard = ({ purpose }) => {
    return (
      <Card>
        <Top>
          <Body>
          {purpose ?.desc && purpose .desc.map((line, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' '} {/* Add a space if not the first item */}
              <span>
                <VscCode/> {/* Replace with your desired icon component */}
                <Span>{line}</Span>
              </span>
            </React.Fragment>
          ))}
          </Body>
        </Top>
      </Card>
    );
  };

export default PurposeCard;
