import PropTypes from 'prop-types';

import styles from './friend-list.module.css';

const FriendList = ({ friends }) => {
  const elements = friends.map(({avatar, name, isOnline, id}) => (
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.active : styles.status}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  ));

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
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired
  }))
}