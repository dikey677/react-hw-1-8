import Profile from '../homework-01/Profile/Profile'
import user from "../homework-01/Profile/user.json";
import Statistics from '../homework-01/Statistics/Statistics'
import data from "../homework-01/Statistics/data.json";
import FriendList from '../homework-01/FriendList/FriendList'
import friends from '../homework-01/FriendList/friends.json' 
import TransactionHistory from '../homework-01/TransactionHistory/TransactionHistory'
import transactions from '../homework-01/TransactionHistory/transactions.json'
import {Container} from './App.styled'

export default function App() {
    return (
        <Container>
            
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
        </Container>
        
    );
}