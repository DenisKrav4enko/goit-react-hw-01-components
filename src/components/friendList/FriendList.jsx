import React from 'react';
import {
  Friends,
  Item,
  Status,
  Avatar,
  Name,
} from './StyledComponents';

const FriendList = props => {
  const {friends} = props;

  return (
    <Friends>
      {friends.map(item => (
      <Item key={item.id}>
        {item.isOnline
          ? <Status style={{ backgroundColor: '#55AB56' }}/>
          : <Status style={{ backgroundColor: '#F9564C' }}/>
        }
        <Avatar
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <Name>
          {item.name}
        </Name>
      </Item>
      ))}
    </Friends>
  )
}

export default FriendList;