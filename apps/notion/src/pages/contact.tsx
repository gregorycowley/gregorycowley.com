import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/gregorycowley',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/gregorycowley/',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="avatar" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>Contact</h1>

        <div className={contactStyles.name}>
          Gregory Cowley - Creative Technologist
          <ExtLink href="https://gregorycowley.com">gregorycowley.com</ExtLink>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
