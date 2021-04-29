import firebase from 'firebase/app'
import Head from 'next/head'
import React, { useState } from 'react'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

export default function signup() {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const createUser = async (e) => {
    e.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(userId, password)
      .then((userCredential) => {
        console.log(userCredential.user)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <Head>
        <title>Sign up</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <form action='post'>
        <input
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          name='userId'
          id='userId'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          id='password'
        />
        <button onClick={createUser} type='button'>
          Sign up
        </button>
      </form>
    </div>
  )
}
