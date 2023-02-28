import { Link } from 'react-router-dom'


import styles from './Home.module.scss'

import startupCulture from '../../Images/startupCulture.png'

export function Home() {
  return (
    <main className={styles.main_container}>
      <section className={styles.home_container}>
        <h1>Welcome to my project! In this project, we're using the <span>NASA</span> APIs to produce a website.</h1>
        <img className={styles.image_content} src={startupCulture} alt="StartUp Culture" />
        

      </section>
      <Link to='/Api'>
        <button className={styles.button_content}>Learn More</button>
      </Link>
    </main>
  )
}
