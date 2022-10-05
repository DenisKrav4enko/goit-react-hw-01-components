import React from 'react';
import PropTypes from 'prop-types';
import { Friends } from './StyledComponents';
import FriendListItem from './friendListItem/FriendListItem';

const FriendList = props => {
  const { friends } = props;

  return (
    <Friends>
      {friends.map(item =>(
        <FriendListItem
          key={item.id}
          item={item}
        />
      ))}
    </Friends>
  )
}

FriendList.propTypes = {
  id: PropTypes.number,
  item: PropTypes.object,
  friends: PropTypes.array.isRequired
};

export default FriendList;