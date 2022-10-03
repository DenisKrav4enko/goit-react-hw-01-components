import React from 'react';
import { Wrapper } from './StyledComponents';
import Profile from './profile/Profile';
import userData from '../data/user.json';
import Statistics from './statistics/Statistics';
import stats from '../data/data.json';
import FriendList from './friendList/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactionItems from '../data/transactions.json';

export const App = () => {
  return (
    <Wrapper>
      <Profile userData={userData}/>
      <Statistics
        stats={stats}
        title={'Upload stats'}
      />
      <FriendList friends={friends}/>
      <TransactionHistory transactionItems={transactionItems}/>
    </Wrapper>
  );
};
