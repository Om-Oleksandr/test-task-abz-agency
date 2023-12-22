import React from 'react'
import styles from './card.module.sass'
import CONSTANTS from '../../../constants'
const UserCard = props => {
  const {
    data: { name, position, email, phone, photo }
  } = props
  return (
    <div className={styles.item}>
      <img
        src={photo}
        alt='user_avatar'
        loading='lazy'
        onError={e => {
          e.target.src = `${CONSTANTS.PUBLIC_URL}/photo-cover.svg`
        }}
      />
      <p className={styles.name}>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
}

export default UserCard
