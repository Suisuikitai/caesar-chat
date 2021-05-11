import firebase from 'firebase/app'
import React, { FormEvent, SyntheticEvent, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function UserShow() {
  const [uid, setUid] = useState('')
  const [messageBody, setMessageBody] = useState('')
  const router = useRouter()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    firebase.firestore().collection('messages').add({
      body: messageBody,
      create_at: firebase.firestore.FieldValue.serverTimestamp(),
      uid: uid,
    })

    router.push('/')
  }

  //uidをもとにユーザ情報を引っ張ってくる
  return (
    <div>
      <h3>{router.query.uid}</h3>
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
