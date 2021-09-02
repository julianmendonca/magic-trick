import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'
import { useUserContext } from '../context/UserContext'

const apiKey = process.env.REACT_APP_GOOGLE_CLIENT_ID

export const GoogleLoginButton = ({
    style = {},
}: {
    style?: React.CSSProperties
}) => {
    const { setGoogleId } = useUserContext()
    const handleGoogleLogin = (response: GoogleLoginResponse) => {
        const googleId = response.googleId
        if (googleId && setGoogleId) setGoogleId(googleId)
    }

    return (
        <GoogleLogin
            clientId={apiKey as string}
            buttonText="Login"
            onSuccess={(response) => {
                handleGoogleLogin(response as GoogleLoginResponse)
            }}
            onFailure={(e) => {
                console.error(e)
            }}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            style={style}
        />
    )
}
