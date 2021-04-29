import Head from 'next/head'
import React, { useState } from 'react'
import { signup } from '../lib/signup'

export default function login(){
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <Head>
        <title>Sign up</title> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form action="post">
        <input type="text" value={userId} onChange={e => setUserId(e.target.value)} name="userId" id="userId"/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" id="password"/>
        <button onClick={signup(userId, password)} type="button">
          Sign up
        </button>
      </form>
    </div>
  )
}
