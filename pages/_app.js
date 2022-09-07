import '../styles/globals.css'
import 'tailwindcss/tailwind.css'



import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp


// import { SessionProvider } from 'next-auth/react'

// function MyApp({ Component, pageProps }) {
//   return (
//     // <Provider session={pageProps.session}>
//     <SessionProvider session={pageProps.session} >
//       <Component {...pageProps} />
//       </SessionProvider>
    
//     // </Provider>
//   )
// }

// export default MyApp



// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

