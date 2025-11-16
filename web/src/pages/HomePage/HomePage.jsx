import { Link, routes } from '@cedarjs/router'
import { Metadata } from '@cedarjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
      </p>
      link to About with:
      <Link to={routes.about()}>About</Link>
    </>
  )
}

export default HomePage
