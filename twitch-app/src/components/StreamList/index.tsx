import React from 'react';
import { Text } from 'react-native';

import streamT from '../../images/stream.jpg';
import avatar from '../../images/avatar.jpg';

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText
} from './styles';

const StreamList: React.FC = () => {

  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamT} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar source={avatar}/>
            <StreamUsername numberOfLines={1}>Gaules</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            A many games...
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Counter-Strike:Global Offensive
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Português</TagText>
          </TagView>
          <TagView>
            <TagText>FPS</TagText>
          </TagView>
        </TagRow>

      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
