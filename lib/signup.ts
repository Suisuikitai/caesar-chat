import { auth } from '../lib/firebase'

const signup = async (email: string, password: string) => {
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log('suceeded')
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    })
}

export { signup }
