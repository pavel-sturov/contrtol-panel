import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export const ProjectCounter = ({ count }) => (
    <div className={styles.counter}>
        <div className={styles.title}>Всего проектов:</div>
        <div className={styles.number}>{count}</div>
    </div>
)

ProjectCounter.propTypes = {
    count: PropTypes.number,
}

ProjectCounter.defaultProps = {
    count: 0,
}
