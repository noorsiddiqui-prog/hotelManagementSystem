/* eslint-disable import/no-anonymous-default-export */
// import { sign } from "jsonwebtoken";
// import { serialize } from "cookie";

// const secret = process.env.SECRET;

// export default async function (req, res) {
//   const { username, password } = req.body;

//   // Check in the database
//   // if a user with this username
//   // and password exists
  
//     const postRes = await axios.post('http://localhost:8000/portal/api/login/', {
//       username,
//       password,
//     })
//     const token = sign(
//       {
//         exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
//         username: username,
//       },
//       secret
//     );

//     const serialised = serialize("OursiteJWT", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV !== "development",
//       sameSite: "strict",
//       maxAge: 60 * 60 * 24 * 30,
//       path: "/",
//     });

//     res.setHeader("Set-Cookie", serialised);

//     res.status(200).json({ message: "Success!" });
  
//     res.json({ message: "Invalid credentials!" });
  
// }







// import axios from 'axios';
// import { setCookie } from 'nookies'

// export default async (req, res) => {
//   const { password, username } = req.body;

//   try {
//     const postRes = await axios.post('http://localhost:8000/portal/api/login/', {
//       username,
//       password,
//     })

//     setCookie({ res }, 'jwt', postRes.data.jwt, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV !== 'development',
//     //   maxAge: 30 * 24 * 60 * 60,
//       path: '/',
//     });

//     res.status(200).end();
//   } catch (e) {
//     res.status(400).send(e.response.data.message);
//   }
// }