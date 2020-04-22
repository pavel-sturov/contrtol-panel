import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { AccountCircle, ExitToApp, People } from '@material-ui/icons'
import { Tip } from 'components/global/Tip'
import { Link } from 'react-router-dom'

/**
 * Render account component
 *
 * @param {string} name
 *
 * @return {*}
 * @constructor
 */
export const Account = ({ name }) => {
    const [showAccount, setShowAccount] = useState(false)

    const accRef = useRef()

    const handleClickOutside = event => {
        if (!accRef.current.contains(event.target)) {
            setShowAccount(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const toggleAccount = () => setShowAccount(!showAccount)

    const tipTitle = !showAccount ? 'Ваш аккаунт' : ''

    return (
        <Tip title={tipTitle}>
            <div
                id={'acc'}
                ref={accRef}
                onClick={toggleAccount}
                className={styles.accountWrapper}
            >

                <div className={styles.name}>
                    {name}
                </div>
                <AccountCircle className={styles.account}/>
                <div
                    className={[styles.accountActions, showAccount && styles.activeAcc].join(' ')}
                >
                    <div className={styles.action}>
                        <People/>
                        <span>{'Аккаунт'}</span>
                    </div>
                    <div className={styles.action}>
                        <ExitToApp/>
                        <Link to={'/'} className={styles.link}>
                            <span>{'Выйти'}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Tip>
    )
}

Account.propTypes = {
    name: PropTypes.string,
}

Account.defaultProps = {
    name: '',
}
