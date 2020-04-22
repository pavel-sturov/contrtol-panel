import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import styles from './styles.module.scss'
import { ButtonIcon } from 'components/global/ButtonIcon'
import { AsidePanel } from 'components/global/AsidePanel'
import { Edit } from '@material-ui/icons'
import { Tip } from 'components/global/Tip'

const tip = {
    edit:   'Редактировать',
    delete: 'Удалить',
}

/**
 * Render toggle right menu
 *
 * @param {function} trigger
 * @param {Object} project
 *
 * @returns {*}
 * @constructor
 */
export const EditProject = ({ mainTitle, project, edit }) => {

    const [state, setState] = useState(false)

    const show  = () => setState(true)
    const close = () => setState(false)

    return (
        <Tip title={tip.edit}>
            <div className={styles.menuWrapper}>
                <ButtonIcon action={show} color={'green'}>
                    <Edit className={styles.editIcon}/>
                </ButtonIcon>
                <Drawer anchor={'right'} open={state} onClose={close}>
                    <div
                        className={styles.list}
                        role="presentation"
                    >
                        <AsidePanel edit={edit} mainTitle={mainTitle} project={project} close={close}/>
                    </div>
                </Drawer>
            </div>
        </Tip>
    )
}

EditProject.propTypes = {
    edit:      PropTypes.func,
    mainTitle: PropTypes.string,
    project:   PropTypes.object,
}

EditProject.defaultProps = {
    edit:      () => null,
    mainTitle: '',
    project:   {},
}
