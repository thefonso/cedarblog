import { Link, routes } from '@cedarjs/router'
import { Metadata } from '@cedarjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />

      <h1>AboutPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.jsx</code>
      </p>
      link to Home with:
      <Link to={routes.home()}>Home</Link>
    </>
  )
}

export default AboutPage
