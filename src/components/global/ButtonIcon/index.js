import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

/**
 * Render Button with icon
 *
 * @param {function} action
 * @param {string} icon
 * @returns {*}
 *
 * @constructor
 */
export const ButtonIcon = ({ action, children }) => {
    return (
        <div onClick={action} className={styles.trigger}>
            {children}
        </div>
    )
}

ButtonIcon.propTypes = {
    action: PropTypes.func,
    icon:   PropTypes.object,
}

ButtonIcon.defaultProps = {
    action: () => null,
    icon:   {},
}
