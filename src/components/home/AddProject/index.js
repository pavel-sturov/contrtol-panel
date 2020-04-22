import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import styles from 'components/home/AddProject/styles.module.scss'
import { AsidePanel } from 'components/global/AsidePanel'
import { AddSharp } from '@material-ui/icons'

const mainTitle = 'Добавить проект'

export const AddProject = ({ createProject }) => {
    const [state, setState] = useState(false)

    const show  = () => setState(true)
    const close = () => setState(false)

    return (
        <>
            <div onClick={show} className={styles.addBtn}>
                <AddSharp/>
                <div>{mainTitle}</div>
            </div>
            <Drawer anchor={'right'} open={state} onClose={close}>
                <div
                    className={styles.list}
                    role="presentation"
                >
                    <AsidePanel addProject={createProject} mainTitle={mainTitle} close={close}/>
                </div>
            </Drawer>
        </>
    )
}
