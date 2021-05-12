import firebase from 'firebase/app'
import React, { FormEvent, SyntheticEvent, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { User } from '../../models/User'

export default function UserShow() {
  const [user, setUser] = useState(new User('', '', ''))
  const [uid, setUid] = useState('')
  const [messageBody, setMessageBody] = useState('')
  const router = useRouter()
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    firebase.firestore().collection('messages').add({
      body: messageBody,
      create_at: firebase.firestore.FieldValue.serverTimestamp(),
      uid: uid,
    })

    router.push('/')
  }
  const fetchDocs = async (uid: string) => {
    const snapshot = await firebase
      .firestore()
      .collection('users')
      .where('uid', '==', uid)
      .get()
    return snapshot.docs
  }

  useEffect(() => {
    const docs = fetchDocs(router.query.uid as string)
    docs.then((doc) => {
      const userData = doc.pop().data()
      const user = new User(userData.uid, userData.name, userData.email_address)
      setUser(user)
    })
  }, [])

  return (
    <div>
      <h3>{user.name}</h3>
      <form action='' onSubmit={onSubmit}>
        <textarea
          name='message'
          id='message'
          cols={30}
          rows={10}
          value={messageBody}
          onChange={(e) => {
            setMessageBody(e.target.value)
          }}
        ></textarea>
      </form>
    </div>
  )
}
