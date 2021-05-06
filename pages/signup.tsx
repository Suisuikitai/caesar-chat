import firebase from 'firebase/app'
import Head from 'next/head'
import React, { SyntheticEvent, useState } from 'react'
import Router from 'next/router'

export default function signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUser = async (e: SyntheticEvent) => {
    e.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential.user.sendEmailVerification()
        Router.router.push('/')
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
        <label htmlFor='email'>
          email
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name='email'
            id='email'
          />
        </label>
        <label htmlFor='password'>
          password
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name='password'
            id='password'
          />
        </label>
        <button onClick={createUser} type='button'>
          Sign up
        </button>
      </form>
    </div>
  )
}
