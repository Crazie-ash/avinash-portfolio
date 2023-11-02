import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  overflow: visible;
  white-space: pre-line; /* Preserve new lines */
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
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
  color: white;
`;

const PurposeCard = ({ purpose }) => {
    return (
      <Card>
        <Top>
          <Body>
            {purpose?.desc && purpose.desc.map((line, index) => (
              <Span key={index}>{`${index + 1}. ${line}`}</Span>
            ))}
          </Body>
        </Top>
      </Card>
    );
  };

export default PurposeCard;
