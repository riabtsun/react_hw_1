import styles from './profile.module.sass';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>followers </span>
          <span className={styles.quantity}> {stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>views </span>
          <span className={styles.quantity}> {stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
