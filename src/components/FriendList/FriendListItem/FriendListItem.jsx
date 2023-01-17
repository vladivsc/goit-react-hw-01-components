import PropTypes from 'prop-types';
import styles from '../FriendListItem/friend-item.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
  const fullClassName = isOnline ? styles.active : styles.status;
  return <li className={styles.item}>
  <span className={fullClassName}></span>
  <img
    className={styles.avatar}
    src={avatar}
    alt="User avatar"
    width="48"
  />
  <p className={styles.name}>{name}</p>
</li>
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}