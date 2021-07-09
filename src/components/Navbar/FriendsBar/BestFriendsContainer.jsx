import { connect } from 'react-redux';
import BestFriends from './BestFriends';

let mapStateToProps = (state) => {
  return {
    bestFriends: state.FriendsBar.BestFriends
  }
}
const BestFriendsContainer = connect(mapStateToProps)(BestFriends)
export default BestFriendsContainer