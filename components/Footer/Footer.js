import Link from 'next/link'
import Typography from '@mui/material/Typography';
import FooterStyles from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const  Footer = () => {
  return (
    <div className={FooterStyles.container}>
      <nav className={FooterStyles.nav}>
        <Typography variant="h7" component="div" lassName={FooterStyles.copyrights}>
          &copy; 2022 Cars for everyone.
        </Typography>
        <ul>
          <li>
            <Link href='https://twitter.com/mercedesbenzusa'><TwitterIcon /></Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/mercedesbenz/?hl=en'><InstagramIcon /></Link>
          </li>
          <li>
            <Link href='https://www.facebook.com/mercedesbenzusa/'><FacebookIcon /></Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Footer