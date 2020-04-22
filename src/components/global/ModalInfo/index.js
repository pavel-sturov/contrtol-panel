import React, { useRef, useState } from 'react'
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { ButtonIcon } from 'components/global/ButtonIcon'
import { BackDropSpinner } from 'components/global/Backdrop'

/**
 * Render modal window
 *
 * @param {string} btnTitle
 * @param {string} text
 * @param {string} className
 * @param {Object} project
 * @param {Object} children
 * @param {function} deleteProject
 *
 * @return {*}
 * @constructor
 */
export const ModalInfo = ({ btnTitle, text, className, project, children, deleteProject }) => {
    const [modal, setModal]                         = useState(false)
    const [inputValue, setInputValue]               = useState('')
    const [isActiveWrongName, setIsActiveWrongName] = useState(false)
    const [fetching, setFetching]                   = useState(false)

    let inputRef = useRef()

    const modalToggle   = () => {
        setModal(!modal)
        setInputValue('')
    }
    const inputToggle   = event => setInputValue(event.target.value)
    const showWrongName = () => {
        setInputValue('')
        setIsActiveWrongName(true)
        inputRef.current.focus()
        setTimeout(() => setIsActiveWrongName(false), 2000)
    }

    const remove = () => {
        if (inputValue === project.getTitle()) {
            setFetching(true)
            setTimeout(() => {
                deleteProject(project.getRawModel())
                setFetching(false)
                setModal(!modal)
            }, 2000)
        } else {
            showWrongName()
        }
    }

    return (
        <div>
            <BackDropSpinner isActive={fetching}/>
            <ButtonIcon action={modalToggle} color={'red'}>
                {children}
            </ButtonIcon>
            <Modal isOpen={modal} toggle={modalToggle} className={className}>
                <ModalHeader toggle={modalToggle}>{btnTitle}</ModalHeader>
                <ModalBody>
                    {text}
                    <div className={styles.input}>
                        <Label for="input">
                            {'Чтобы удалить проект введите его название '}
                            <b>{`( ${project.getTitle()} )`}</b>
                        </Label>
                        <div className={[styles.wrongName, isActiveWrongName && styles.showWrongName].join(' ')}>
                            {'Названия не совпадают'}
                        </div>
                        <Input
                            innerRef={inputRef}
                            id="input"
                            placeholder="Введите название здесь..."
                            onChange={inputToggle}
                            value={inputValue}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={remove}>Удалить</Button>{' '}
                    <Button color="primary" onClick={modalToggle}>Отмена</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

ModalInfo.propTypes = {
  btnTitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  deleteProject: PropTypes.func,
  project: PropTypes.object,
  text: PropTypes.string,
  title: PropTypes.string,
}

ModalInfo.defaultProps = {
  btnTitle: '',
  children: null,
  className: '',
  deleteProject: () => null,
  project: {},
  text: '',
  title: '',
}
