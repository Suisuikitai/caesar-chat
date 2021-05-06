import firebase from 'firebase/app'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import Head from 'next/head'

export default function list() {
  const [name, setName] = useState('')
  // const [active, setActive] = useState('')
  async function listUser() {
    const snapshot = await firebase
      .firestore()
      .collection('users')
      .where('active', '==', false)
      .get()

    snapshot.docs.map((doc) => {
      const name = doc.data().name
      setName(name)
    })
  }

  useEffect(() => {
    if (!process.browser) {
      return
    }
    listUser()
    // console.log(actives)
  }, [name])

  return (
    <div>
      <Head>
        <title>Sign up</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Hello World!</h1>
      <div>{name}</div>
    </div>
  )
}
