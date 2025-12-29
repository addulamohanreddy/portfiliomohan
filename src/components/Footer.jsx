import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/mohanreddy-addula-075bb1395"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <span><FaEnvelope /> addulamohanreddy1521@gmail.com</span>
      <span><FaPhone /> +91 9391619100</span>
      <span><FaMapMarkerAlt /> Hyderabad, India</span>
    </footer>
  )
}
