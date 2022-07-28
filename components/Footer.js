import Link from 'next/link'
import Typography from '@mui/material/Typography';
import FooterStyles from '../styles/Footer.module.css'
const  Footer = () => {
  return (
    <div className={FooterStyles.container}>
      <nav className={FooterStyles.nav}>
        <ul>
          <li>
            <Typography variant="h5" component="div" gutterBottom>
              Company Name
            </Typography>
          </li>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Get in touch</Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Footer