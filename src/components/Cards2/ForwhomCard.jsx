import React from 'react';
import styled from 'styled-components';
// import { VscCode } from "react-icons/vsc";

const Span = styled.span`
  overflow: visible;
  white-space: pre-line; /* Preserve new lines */
`;

const Card = styled.div`
  width: 650px;
  max-width: 650px; /* Set a maximum width for larger screens */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto; /* Center the card horizontally */

  @media (max-width: 768px) {
    width: 352px;
    max-width: 100%; /* Take full width on smaller screens */
    padding: 12px; /* Add some padding on smaller screens */
  }
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
  font-size: 19px;
  font-weight: 550;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px; /* Reduce font size on smaller screens */
  }
`;


const ForwhomCard = ({ Forwhom }) => {
  return (
    <Card>
      <Top>
        <Body>
        {Forwhom?.desc && <Span>{Forwhom?.desc.join('\n')}</Span>}
        </Body>
      </Top>
    </Card>
  );
};

export default ForwhomCard;
