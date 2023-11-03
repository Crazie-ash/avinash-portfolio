import React from 'react';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import { iconListData } from '../../data/constants';

const IconListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 157px;
  margin-left: 189px;
}
`;

const IconListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color:white;

  .icon {
    margin-right: 10px;
  }

  .text {
    font-size: 16px;
  }
`;


function IconList() {
  return (
    <IconListContainer>
      {iconListData.map((text, index) => (
        <IconListItem key={index}>
          <div className="icon">
            <CheckIcon />
          </div>
          <div className="text">{text}</div>
        </IconListItem>
      ))}
    </IconListContainer>
  );
}

export default IconList;
