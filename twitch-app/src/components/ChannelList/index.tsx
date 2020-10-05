import React from 'react';

import avatar from '../../images/avatar.jpg';

import {
  List,
  ChannelContainer,
  LeftSide,
  RightSide,
  Column,
  Username,
  Info,
  WhiteCircle,
  Avatar,
} from './styles';

const ChannelList: React.FC = () => {

  const ChannelItem: React.FC = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar source={avatar} />
        <Column>
          <Username>vitao_da_coca_cola</Username>
          <Info>3 new videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
