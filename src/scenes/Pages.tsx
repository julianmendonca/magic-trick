import { Route, Switch } from 'react-router-dom'
import { Home } from './Home/Home'

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
}

export const Pages = () => {
    return (
        <Switch>
            {Object.keys(pages).map((i) => (
                <Route
                    key={pages[i].name}
                    exact
                    path={pages[i].path}
                    component={pages[i].Component}
                ></Route>
            ))}
        </Switch>
    )
}
