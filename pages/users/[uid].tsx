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
      create_at: new Date(),
    })
    return
  }

  return (
    <div>
      <h3>{router.query.uid}</h3>
      <form action='' onSubmit={onSubmit}></form>
    </div>
  )
}
