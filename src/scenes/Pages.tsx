import { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import { Home } from './Home/Home'
import { Login } from './Login/Login'

type PagesType = {
    name: string
    path: string
    Component: () => JSX.Element
}
const pages: { [key: string]: PagesType } = {
    Home: {
        name: 'Home',
        path: '/',
        Component: Home,
    },
    Login: {
        name: 'Login',
        path: '/login',
        Component: Login,
    },
}

export const Pages = () => {
    const { googleId } = useUserContext()
    const history = useHistory()
    useEffect(() => {
        // if (!googleId) history.push(pages.Login.path)
    })

    return (
        <Switch>
            {Object.keys(pages).map((i) => (
                <Route
                    exact
                    path={pages[i].path}
                    component={pages[i].Component}
                ></Route>
            ))}
        </Switch>
    )
}
