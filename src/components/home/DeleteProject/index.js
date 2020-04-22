import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { ModalInfo } from 'components/global/ModalInfo'
import { DeleteForever } from '@material-ui/icons'
import { Tip } from 'components/global/Tip'

const text     = 'Удаление проекта приведет к потере всех данных. Вы действительно хотите это сделать?'
const btnTitle = 'Удаление'
const tip      = {
    edit:   'Редактировать',
    delete: 'Удалить',
}

export const DeleteProject = ({ action, project }) => {
    return (
        <Tip title={tip.delete}>
            <div className={styles.modalWrapper}>
                <ModalInfo
                    deleteProject={action}
                    project={project}
                    text={text}
                    btnTitle={btnTitle}
                >
                    <DeleteForever className={styles.removeIcon}/>
                </ModalInfo>
            </div>
        </Tip>
    )
}

DeleteProject.propTypes = {
    action:  PropTypes.func,
    project: PropTypes.object,
}

DeleteProject.defaultProps = {
    action:  () => null,
    project: {},
}
