import Profile from './components/Profile'
import user from "./homework-01/social-profile/user.json";
import Statistics from './components/Statistics'
import data from "./homework-01/statistics/data.json";
import FriendList from './components/FriendList'
import friends from './homework-01/friend-list/friends.json';
import TransactionHistory from './components/TransactionHistory'
import transactions from './homework-01/transaction-history/transactions.json'

export default function App() {
    return (
        <div>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
            />
        <Statistics 
            title="Upload stats"
            stats={data}
            />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />;
        </div>
        
    );
}