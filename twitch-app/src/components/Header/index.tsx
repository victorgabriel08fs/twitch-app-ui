import React from 'react';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';

import { Container, AvatarDiv, Avatar, OnlineStatus, Button, RightSide } from './styles';
import avatar from '../../images/avatar.jpg';

const Header: React.FC = () => {
  return (
    <Container>
      <AvatarDiv>
        <Avatar source={avatar}>
          <OnlineStatus />
        </Avatar>
      </AvatarDiv>
      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
