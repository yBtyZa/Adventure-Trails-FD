import './Footer.css'
import logoInstagram from '../../../assets/img/logoInstagram.png'
import logoLinkedin from '../../../assets/img/logoLinkedin.png'
import logoGithub from '../../../assets/img/logoGithub.png'

function Footer() {
 return (
  <div className="footer">
   <p>Adventure Trails FD - <strong>by: Guilherme Betsa</strong></p>
   <div className='footer_img'>
    <a href="https://github.com/yBtyZa" target='_blank'><img
     src={logoGithub}
     alt="github-logo-24"
    /></a>
    <a href="https://www.linkedin.com/in/gbetsa" target='_blank'><img
     src={logoLinkedin}
     alt="linkedin-logo-24"
    /></a>
    <a href="https://www.instagram.com/_gbetsa/"><img
     src={logoInstagram}
     alt="instagram-logo-24"
    /></a>
   </div>
  </div>
 );
}

export default Footer;
