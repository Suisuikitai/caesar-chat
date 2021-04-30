import firebase from 'firebase/app'
import Head from 'next/head'
import React, { SyntheticEvent, useState } from 'react'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import { formatWithValidation } from 'next/dist/next-server/lib/utils'

// export default function EmailPasswordForm() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const createUser = async (e: SyntheticEvent) => {
//     e.preventDefault()
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         console.log(userCredential.user)
//       })
//       .catch((error) => {
//         console.log(error.message)
//       })
//   }

//   return (
//     <form action='post'>
//       <label htmlFor='email'>
//         email
//         <input
//           type='email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           name='email'
//           id='email'
//         />
//       </label>
//       <label htmlFor='password'>
//         password
//         <input
//           type='password'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           name='password'
//           id='password'
//         />
//       </label>
//       <button onClick={createUser} type='button'>
//         Sign up
//       </button>
//     </form>
//   )
// }
