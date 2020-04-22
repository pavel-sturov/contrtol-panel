import React from 'react'
import PropTypes from 'prop-types'
import styles from 'containers/Header/styles.module.scss'
import { HomeLink } from 'components/header/HomeLink'
import { Account } from 'components/header/Account'
import { BurgerAcc } from 'components/header/SearchPanel/BurgerAcc'
import SearchPanel from 'components/header/SearchPanel/index.store'

/**
 * Render Header
 *
 * @param {string} name
 *
 * @returns {*}
 * @constructor
 */
export const Header = ({ name }) => (
    <div className={styles.wrapper}>
        <HomeLink/>
        <div className={styles.searchAcc}>
            <SearchPanel/>
            <Account name={name}/>
        </div>
        <div className={styles.burgerAcc}>
            <BurgerAcc/>
        </div>
    </div>
)

Header.propTypes = {
    name: PropTypes.string,
}

Header.defaultProps = {
    name: '',
}
