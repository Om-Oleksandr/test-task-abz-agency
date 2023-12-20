import React from 'react'
import styles from './welcome.module.sass'
const Welcome = (props) => {
  const { scrollToSection } = props
  return (
    <div className={styles.welcomeContainer} >
      <img src='/assets/images/background.jpeg' alt='field' />
      <div className={styles.content}>
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button onClick={(event)=>scrollToSection(event)} data-destination='registration'>Sign up</button>
      </div>
    </div>
  )
}

export default Welcome
