import React from 'react'
import styles from './header.module.sass'
import CONSTANTS from '../../constants'
const Header = props => {
  const { scrollToSection } = props
  return (
    <header className={styles.header}>
      <div>
        <img src={`${CONSTANTS.PUBLIC_URL}/Logo.svg`} alt='logo' />
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.item}
          onClick={event => scrollToSection(event)}
          data-destination='users'
        >
          Users
        </button>
        <button
          className={styles.item}
          onClick={event => scrollToSection(event)}
          data-destination='registration'
        >
          Sign up
        </button>
      </div>
    </header>
  )
}

export default Header
