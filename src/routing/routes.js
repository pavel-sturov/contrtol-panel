import { SignIn } from 'containers/Sign-in'
import Home from 'containers/Home/index.store'

export const routes = [
    { id: 1, path: '/', component: SignIn, exact: true },
    { id: 2, path: '/home', component: Home, exact: true },
]
