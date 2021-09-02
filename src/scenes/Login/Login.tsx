import { Box } from '@material-ui/core'
import { GoogleLoginButton } from '../../components/GoogleLoginButton'

export const Login = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            flexDirection="column"
            maxHeight={500}
            position="fixed"
            left="50%"
            top="50%"
            style={{ transform: 'translate(-50%,-50%)' }}
        >
            <GoogleLoginButton />
        </Box>
    )
}
