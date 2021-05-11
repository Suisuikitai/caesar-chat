import firebase from 'firebase/app'
import Head from 'next/head'
import React, { SyntheticEvent, useState } from 'react'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import { formatWithValidation } from 'next/dist/next-server/lib/utils'

export class User {
  constructor(uid: string, name: string, email_address: string) {
    this.uid = uid
    this.name = name
    this.email_address = email_address
  }
  uid: string
  name: string
  email_address: string
}
