import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem'
import styles from './friend-list.module.css';

const FriendList = ({ friends }) => {
  const elements = friends.map(({id, ...props}) =>  <FriendListItem key={id} {...props} />
  );

  return (
    <>
      <ul className={styles.list}>
        {elements}
        </ul>
    </>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired
  }))
}