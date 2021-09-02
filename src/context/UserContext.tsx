import React, { useEffect, useState } from 'react'
import { GoogleLoginResponse } from 'react-google-login'
import {
    useGetUSerByGoogleIdLazyQuery,
    useInsertUserMutation,
} from '../graphql/autogenerate/hooks'
const UserContext = React.createContext<{
    googleId: string
    setGoogleId: React.Dispatch<React.SetStateAction<string>> | null
    setGoogleLoginResponse: React.Dispatch<
        React.SetStateAction<GoogleLoginResponse | undefined>
    > | null
}>({ googleId: '', setGoogleId: null, setGoogleLoginResponse: null })

export const UserProvider = ({ children }: { children: JSX.Element[] }) => {
    const [googleLoginResponse, setGoogleLoginResponse] =
        useState<GoogleLoginResponse>()
    const [googleId, setGoogleId] = useState('')

    const [
        getUserByGoogleId,
        { data: getUserData, loading: getUserLoading, error: getUserError },
    ] = useGetUSerByGoogleIdLazyQuery()
    const [
        insertUser,
        {
            data: insertUserData,
            error: insertUserError,
            loading: insertUserLoading,
        },
    ] = useInsertUserMutation()

    useEffect(() => {
        if (!googleId) return
        getUserByGoogleId({ variables: { googleId } })
    }, [googleId])

    useEffect(() => {
        if (!getUserData && googleId) {
            insertUser({ variables: { googleId } })
        }
    }, [getUserData])

    return (
        <UserContext.Provider
            value={{ googleId, setGoogleId, setGoogleLoginResponse }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    useEffect(() => {}, [])
    const context = React.useContext(UserContext)
    return context
}
