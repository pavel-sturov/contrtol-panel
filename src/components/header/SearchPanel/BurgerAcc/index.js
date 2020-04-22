import React, { useEffect, useRef, useState } from 'react'
import Menu from '@material-ui/core/Menu'
import { ExitToApp, MenuOutlined, Person, Search } from '@material-ui/icons'
import styles from './styles.module.scss'
import { SearchPanel } from 'components/header/SearchPanel/index'

/**
 * Render burger menu if width < 600px
 *
 * @return {*}
 * @constructor
 */
export const BurgerAcc = () => {
    const [anchorEl, setAnchorEl]           = useState(null)
    const [isSearchPanel, setIsSearchPanel] = useState(false)

    const searchPanelRef                    = useRef()

    /**
     * Outside click listener
     *
     * @param event
     * @return {undefined}
     */
    const handleOutsideClick = event => {
        if (!searchPanelRef.current.contains(event.target) && isSearchPanel) {
            setIsSearchPanel(false)
        }
    }

    useEffect(() => {
        if (isSearchPanel) {
            document.addEventListener('mousedown', handleOutsideClick)

            return () => document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [isSearchPanel])

    /**
     * Handle click
     *
     * @param event
     * @return {undefined}
     */
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    /**
     * Close menu
     *
     * @return {undefined}
     */
    const handleClose = () => {
        setAnchorEl(null)
    }

    /**
     * Show search panel
     *
     * @return {undefined}
     */
    const showSearchPanel = () => {
        handleClose()
        setIsSearchPanel(true)
    }

    return (
        <div>
            <div
                ref={searchPanelRef}
                className={[styles.searchPanel, isSearchPanel && styles.showSearchPanel].join(' ')}
            >
                <SearchPanel/>
            </div>
            <div className={[styles.btn, isSearchPanel && styles.hidden].join(' ')} onClick={handleClick}>
                <MenuOutlined className={styles.menu}/>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div onClick={handleClose} className={styles.menuItem}>
                    <Person className={styles.icon}/>
                    Профиль
                </div>
                <div onClick={showSearchPanel} className={styles.menuItem}>
                    <Search className={styles.icon}/>
                    Поиск
                </div>
                <div onClick={handleClose} className={styles.menuItem}>
                    <ExitToApp className={styles.exit}/>
                    Выход
                </div>
            </Menu>
        </div>
    )
}
