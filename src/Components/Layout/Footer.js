import strings from "../../localization";
import './footer.scss'

const Footer = () => {
    return <footer id='main-footer'>
    <div className='footer-contained'>
      <div className='footer-wraper'>
        <div className='footer-item'>
          <h3>{strings.pages.contact.pageTitle}</h3>
          <div className='footer-content'>
            <p>
              <a>
                {strings.footer.askUs}
              </a>
              <a href='mailto:gipsplaatrenovatie@gmail.com'>
                {strings.footer.email}
              </a>
            </p>
          </div>
        </div>
        <div className='footer-item'>
          <h3>{strings.footer.website}</h3>
          <div className='footer-content'>
            <p>
              <a>
                {strings.footer.aboutUs}
              </a>
            </p>
          </div>
        </div>
        <div className='footer-item'>
          <h3>{strings.footer.menu}</h3>
          <div className='footer-content'>
            <p>
              <a href='/'>
                {strings.navigation.home}
              </a>
              <a href='/services'>
                {strings.navigation.services}
              </a>
              <a href='/projects'> 
                {strings.navigation.project}
              </a>
              <a href='/about-us'>
                {strings.navigation.referecnes}
              </a>
              <a href='/contact'>
                {strings.navigation.contact}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
</footer>
}

export default Footer;