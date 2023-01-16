import Profile from './Profile/Profile';
import user from './Profile/user';

import Statistics from './Statistics/Statistics';
import data from './Statistics/data';

import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends'

import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/transactions'

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
