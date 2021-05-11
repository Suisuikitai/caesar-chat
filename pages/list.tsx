import firebase from 'firebase/app'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { User } from '../models/User'

export default function list() {
  const [users, setUsers] = useState([new User('', '', '')])
  async function listUser() {
    const user = firebase.auth().currentUser
    const snapshot = await firebase
      .firestore()
      .collection('users')
      .where('email_address', '!=', user.email)
      .get()

    const userAry = snapshot.docs.map((doc) => {
      const uid = doc.data().uid
      const name = doc.data().name
      const email_address = doc.data().email_address
      console.log(uid)
      console.log(name)
      console.log(email_address)
      return new User(uid, name, email_address)
    })
    setUsers(userAry)
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
      {users.map((user) => (
        <Link href={`/users/${user.uid}`} key={user.uid}>
          <div>
            <a href=''>{user.name}</a>
          </div>
        </Link>
      ))}
    </div>
  )
}
