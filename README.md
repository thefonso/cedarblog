# Build authentication in 5 mins

### Show notes:
Welcome, below are the show notes for the above titled episode enjoy:

---


Let's see how easy it is to add authentication to a CedarJS app

I've downloaded our blog project from: 
https://github.com/thefonso/cedarblog

Here's the problem:

Right now anyone can add a post to our blog site.
To keep that from happening let's add authentication...

with CedarJS

...we can choose any number of hosting services, like Netlify, Azure Active Directory or Auth0. Cedar even has it's own self-hosted auth provider called dbAuth.... for this project I'll choose dbAuth.

FIRST we need

```
yarn rw setup auth dbAuth
```
...Cedar gives us great instructions. NEXT step will be...
```
yarn rw prisma migrate dev
```
```
yarn rw g dbAuth
```

Note that Cedar gave us a number of pages Login, ForgotPassword, Resetpassword and Signup pages.

Let's open the routesjs file and see the new routes as well.

Now lets visit the LoginPage in the browser...

We can login or sign up...

Now lets go to the Homepage

we can have "import  useAuth"

```
import {useAuth} from 'src/auth'
```

Now we can add the following...

```
const { isAuthenticated, currentUser, logIn, logOut} = useAuth()

...

{isAuthenticated && <p>Logged in as {currentUser.email}</p>}
{!isAuthenticated && <p>Logged Out</p>}

<button onClick={logIn}>Log In</button>

<button onClick={logOut}>Log Out</button>


```

Now when I click Log In I get the login page



If I log out and go to the home or posts page I can still see my posts...let's secure this.

Routes.js

in Routes js we will add in imports PrivateSet

Now we wrap our routes in 
```
<PrivateSet unauthenticated="login">
...
</PrivateSet>
```

...Now we can see our page again

Now the web side is secure..let's take a look at the api side


Let's look at the graphql explorer on localhost:8911

and I run a query for the posts...I can still see them

(QUERY)
```
posts{
  body
  title
}
```

We get output that says we are unauthenticated!

INSTANTLY DONE BY CEDARJS Wooo HOOO!

AND THAT'S IT!

In one command and very minimal adjustments to a few files and we have full authentication for our app.


### Resources

https://cedarjs.com/docs/authentication

https://cedarjs.com/docs/auth/dbauth  (self hosted)



# Installation


Welcome to your new [CedarJS](https://cedarjs.com) project!

Download the code from this repo (look for the green Code button above)

Start by installing dependencies:

```
yarn install
```

Make sure database is happy

```
yarn rw prisma migrate dev
```

Then start the development server:

```
yarn redwood dev
```

Your browser should automatically open to [http://localhost:8910](http://localhost:8910) 
Graphql server will be on http://localhost:8911
