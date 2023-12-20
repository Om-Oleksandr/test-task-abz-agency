import React from 'react'
import styles from './card.module.sass'
const UserCard = props => {
  const {
    data: { name, position, email, phone, photo }
  } = props
  return (
    <div className={styles.item}>
        <img src={photo || '/assets/images/photo-cover.svg'} alt='user_avatar'
        onError={(e) => {
          e.target.src = '/assets/images/photo-cover.svg';
        }}/>
      <p className={styles.name}>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
}

export default UserCard
