import firebase from 'firebase/app'

export default function authenticate(email: string, password: string) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}
