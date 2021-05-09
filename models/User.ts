import firebase from 'firebase/app'
import Head from 'next/head'
import React, { SyntheticEvent, useState } from 'react'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import { formatWithValidation } from 'next/dist/next-server/lib/utils'

export interface User {
  uid: string
  email: string
}
