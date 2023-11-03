import React from 'react';
import styled from 'styled-components';
import { VscCode } from "react-icons/vsc";

const Span = styled.span`
  overflow: visible;
  white-space: pre-line; /* Preserve new lines */
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  // padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 0.1px solid rgb(85 44 98) 0px 4px 24px;
  box-shadow: rgb(85 44 98) 0px 4px 24px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: rgba(242, 243, 244, 0.584);
  font-size: 24px;
  font-weight: 550;
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
