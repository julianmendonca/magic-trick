import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { Pages } from './scenes/Pages'

const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
})

const client = new ApolloClient({
    uri: process.env.REACT_APP_HASURA_ENDPOINT || '',
    headers: {
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || '',
    },
    cache: new InMemoryCache(),
})

function App() {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <UserProvider>
                    <Router>
                        <Pages />
                    </Router>
                    <div className="App" />
                </UserProvider>
            </ThemeProvider>
        </ApolloProvider>
    )
}

export default App
