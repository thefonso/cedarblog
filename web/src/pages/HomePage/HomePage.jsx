import { Link, routes } from '@cedarjs/router'
import { Metadata } from '@cedarjs/web'
import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, currentUser, logIn, logOut } = useAuth()
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
      </p>
      link to About with:
      <Link to={routes.about()}>About</Link>

      {isAuthenticated && <p>Logged In</p>}
      {!isAuthenticated && <p>Logged Out</p>}

      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </>
  )
}

export default HomePage
