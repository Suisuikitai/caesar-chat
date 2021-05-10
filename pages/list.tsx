import firebase from 'firebase/app'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function list() {
  const [names, setNames] = useState([''])
  async function listUser() {
    const user = firebase.auth().currentUser
    const snapshot = await firebase
      .firestore()
      .collection('users')
      .where('email_address', '!=', user.email)
      .get()

    const nameAry = snapshot.docs.map((doc) => {
      const name = doc.data().name
      console.log(name)
      return name
    })
    setNames(nameAry)
  }

  useEffect(() => {
    if (!process.browser) {
      return
    }
    listUser()
  }, [])

  return (
    <div>
      <Head>
        <title>Sign up</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Hello World!</h1>
      {names.map((name) => (
        <Link href={`/users/${name}`} key={name}>
          <div>
            <a href=''>{name}</a>
          </div>
        </Link>
      ))}
    </div>
  )
}
