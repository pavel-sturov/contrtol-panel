import React from 'react'
import styles from './styles.module.scss'
import { Home } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Tip } from 'components/global/Tip'

const title = 'Панель управления проектами'

/**
 * Render home link
 *
 * @return {*}
 * @constructor
 */
export const HomeLink = () => (
    <Tip title={'На главную'}>
        <Link className={styles.link} to={'/home'}>
            <Home/>
            {title}
        </Link>
    </Tip>
)
