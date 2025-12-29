import { motion } from 'framer-motion'
import profile from '../assets/mohanimg.png'

export default function Home() {
  return (
    <section className="home">
      <motion.img
        src={profile}
        alt="Mohan Reddy"
        className="profile-img"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <h2>Addula Mohan Reddy</h2>
      <p>
        Software Engineer | Machine Learning | Cyber Security
      </p>
    </section>
  )
}
