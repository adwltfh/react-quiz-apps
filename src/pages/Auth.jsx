import { Box, Button, Typography } from '@mui/material'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/analytics'

import { useAuthState } from 'react-firebase-hooks/auth'

import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

firebase.initializeApp ({
    apiKey: "AIzaSyDbL-i-edK76Fmvhqlj83GekrsBPPJTEfA",
    authDomain: "react-quiz-app-2022.firebaseapp.com",
    projectId: "react-quiz-app-2022",
    storageBucket: "react-quiz-app-2022.appspot.com",
    messagingSenderId: "919572986767",
    appId: "1:919572986767:web:02834f70ea1358ee8de9fa",
    measurementId: "G-VRERRMHT8Y"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export const LogoutButton = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.signOut()
        
        return navigate('/')
    }

    return auth.currentUser && (
        <Box  mt={3}>
            <Button 
                variant='contained'
                fullWidth
                onClick={handleLogout}
            >
                Logout
            </Button>
        </Box>
    )
}


const Auth = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <Box mt={30}>
            <Typography mb={2} variant='h4'>Login to Start</Typography>
            <Typography mb={4} variant='h6'>Challenge Your Knowledge!</Typography>

            {user ? 
                navigate('/setup')
                : 
                <Button 
                    fullWidth 
                    variant='contained'
                    onClick={handleLogin}
                >
                    Login
                </Button>
            }
        </Box>
    )
}

export default Auth