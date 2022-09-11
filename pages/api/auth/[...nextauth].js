import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import axios from 'axios';

const options = {
  providers: [
    CredentialProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials property is used to generate a suitable form on the sign in page.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Authentication Logic: local function, external API call, etc
        //const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        try {
          const user = await axios.post("http://127.0.0.1:8000/portal/api/login/", credentials);
    
          if (user) {
            console.log(user.data);
            return user.data;
          } else {
            return null;
          }
        } catch(e) {
          throw new Error("There was an error on user authentication");  
        }
      }
    })    
  ],
  session: { 
    jwt: true,
  },
  jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
    secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',    
  }  
}

export default (req, res) => NextAuth(req, res, options);










// import NextAuth from "next-auth";
// import CredentialProvider from "next-auth/providers/credentials";

// export default NextAuth({
//   providers: [
//     CredentialProvider({
//       name: "credentials",
//       credentials: {
//         username: {
//           label: "Email",
//           type: "text",
//           placeholder: "noor7@gmail.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: (credentials) => {
//         // database look up
//         if (
//           credentials.username === "noor7" &&
//           credentials.password === "noor7"
//         ) {
//           return {
//             id: 2,
//             name: "noor7",
//             email: "noor7@gmail.com",
//           };
//         }

//         // login failed
//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     jwt: ({ token, user }) => {
//       // first time jwt callback is run, user object is available
//       if (user) {
//         token.id = user.id;
//       }

//       return token;
//     },
//     session: ({ session, token }) => {
//       if (token) {
//         session.id = token.id;
//       }

//       return session;
//     },
//   },
//   secret: "test",
//   jwt: {
//     secret: "test",
//     encryption: true,
//   },
// //   pages: {
// //     signIn: "auth/sigin",
// //   },
// });