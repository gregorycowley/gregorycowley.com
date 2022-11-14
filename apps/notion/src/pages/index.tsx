import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>

        <h1>Gregory Cowley's Projects</h1>
        <h2>
          Details {' '}
          <ExtLink
            href="https://github.com/vercel/next.js/issues/9524"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            SSG
          </ExtLink>
        </h2>

        <Features />

        <div className="explanation">
          <p>
            Portfolio Website
          </p>

          <p>
            Ad magna sint, consectetur aute.
            <ExtLink href="https://github.com/gregorycowley">
             more info
            </ExtLink>{' '}
          </p>
        </div>
      </div>
    </>
  )
}
