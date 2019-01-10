import * as React from 'react'
import './footer.scss'
import Link from 'gatsby-link'

const companyFooterLinks = {
  name: 'Company',
  links: [
    { name: 'About', path: 'about' },
    { name: 'Blog', path: '/' },
    { name: 'Privacy Policy', path: '/' },
    { name: 'Terms of Service', path: '/' },
  ],
}

const developerFooterLinks = {
  name: 'Developers',
  links: [
    { name: 'Documentation', path: '/' },
    { name: 'Use Cases', path: '/' },
  ],
}

const resourcesFooterLinks = {
  name: 'Resources',
  links: [
    { name: 'Contact', path: '/' },
    { name: 'Cache', path: '/' },
    { name: 'Devslopes', path: '/' },
  ],
}

const partnersFooterLinks = {
  name: 'Partners',
  links: [
    { name: 'Blockchain Training Alliance', path: '/' },
    { name: 'Pearson Vue', path: '/' },
    { name: 'NEM', path: '/' },
  ],
}

const Footer = () => (
    <footer className="blockstart-footer">
      <div className="container footer-container">
        <div className="link-stack">
          <h4 className="link-titles">{companyFooterLinks.name}</h4>
          <ul className="footer-ul">
            {companyFooterLinks.links.map((comLink) =>
              <Link to={comLink.path} replace>
                <li className="list-link" key={comLink.name}>{comLink.name}</li>
              </Link>
            )}
          </ul>
        </div>
        <div className="link-stack">
          <h4 className="link-titles">{developerFooterLinks.name}</h4>
          <ul className="footer-ul">
            {developerFooterLinks.links.map((devLink) =>
              <Link to={devLink.path}>
                <li className="list-link" key={devLink.name}>{devLink.name}</li>
              </Link>
            )}
          </ul>
        </div>
        <div className="link-stack">
          <h4 className="link-titles">{resourcesFooterLinks.name}</h4>
          <ul className="footer-ul">
            {resourcesFooterLinks.links.map((recLink) =>
              <Link to={recLink.path} replace>
                <li className="list-link" key={recLink.name}>{recLink.name}</li>
              </Link>
            )}
          </ul>
        </div>
        <div className="link-stack">
          <h4 className="link-titles">{partnersFooterLinks.name}</h4>
          <ul className="footer-ul">
            {partnersFooterLinks.links.map((partnerLink) =>
              <Link to={partnerLink.path}>
                <li className="list-link" key={partnerLink.name}>{partnerLink.name}</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </footer>
  )

export default Footer
