import Head from 'next/head'
import firebase from 'firebase/app'
import React, { SyntheticEvent, useState } from 'react'
import Router from 'next/router'
import authenticate from '../lib/authentication'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    authenticate(email, password)
      .then((e) => {
        Router.router.push('/list')
      })
      .catch((error) => {
        alert(error)
        throw error
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign in</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div>
          <form
            action=''
            method='post'
            className='signInForm'
            onSubmit={handleSubmit}
          >
            <label htmlFor='email'>
              email
              <input
                type='text'
                name='email'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label htmlFor='password'>
              password
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                name='password'
                id='password'
              />
            </label>
            <button type='submit'>ログイン</button>
          </form>
        </div>
      </main>
    </div>
  )
}
