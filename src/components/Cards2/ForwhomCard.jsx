import React from 'react';
import styled from 'styled-components';
// import { VscCode } from "react-icons/vsc";

const Span = styled.span`
  overflow: visible;
  white-space: pre-line; /* Preserve new lines */
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  // padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  // border: 0.1px solid rgb(85 44 98) 0px 4px 24px;
  // box-shadow: rgb(85 44 98) 0px 4px 24px;
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
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const ForwhomCard = ({ Forwhom }) => {
  return (
    <Card>
      <Top>
        <Body>

          {Forwhom?.desc && (
            <Span>
              {Forwhom.desc.map((sentence, index) => (
                <React.Fragment key={index}>
                  {index === 6 ? (
                    <BoldText>{`Ready to embark on an enriching course? Seize the opportunity to explore limitless possibilities in the world of full-stack development with us.`}</BoldText>
                  ) : (
                    sentence
                  )}
                  <br />
                </React.Fragment>
              ))}
            </Span>
          )}
        </Body>
      </Top>
    </Card>
  );
};

export default ForwhomCard;
