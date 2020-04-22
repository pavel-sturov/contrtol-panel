import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Tooltip, Zoom } from '@material-ui/core'

/**
 * Render tips
 *
 * @param {Node} children
 * @param {string} title
 *
 * @return {*}
 * @constructor
 */
export const Tip = ({ children, title }) => {
    const [hideTitle, setHideTitle] = useState(false)

    const hide = useCallback(() => {
        if (!hideTitle) {
            setHideTitle(true)
        }
    }, [hideTitle])

    const show = useCallback(() => {
        if (hideTitle)
            setHideTitle(false)
    }, [hideTitle])

    const tipTitle = hideTitle ? '' : title

    return (
        <div
            onMouseLeave={show}
            onMouseEnter={show}
        >
            <Tooltip
                onClick={hide}
                TransitionComponent={Zoom}
                title={tipTitle}
            >
                {children}
            </Tooltip>
        </div>
    )
}

Tip.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}

Tip.defaultProps = {
    children: null,
    title: '',
}
