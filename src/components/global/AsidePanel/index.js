import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Home, Computer, Description, People } from '@material-ui/icons'
import styles from './styles.module.scss'
import { BackDropSpinner } from 'components/global/Backdrop'
import uniqid from 'uniqid'

const titles = {
    name:        'Название проекта',
    alias:       'Alias',
    domain:      'Домен',
    description: 'Описание',
    save:        'Сохранить',
    cancel:      'Отмена',
}

/**
 * Render aside panel
 *
 * @param {string} mainTitle
 * @param {Object} project
 * @param {function} close
 * @param {function} edit
 * @param {function} addProject
 *
 * @return {*}
 * @constructor
 */
export const AsidePanel = ({ mainTitle, project, close, edit, addProject }) => {
    const { title, alias, domain, description, id } = project

    const [fetching, setFetching] = useState(false)

    const [state, setState] = useState({
        id,
        title,
        alias,
        domain,
        description,
    })

    /**
     * Save click listener
     *
     * @return {undefined}
     */
    const save = () => {
        setFetching(true)
        setTimeout(() => {
            if (addProject) {
                addProject(state)
            } else {
                edit(state)
            }
            setFetching(false)
            close()
        }, 1500)
    }

    /**
     * Set text to state
     *
     * @param event
     * @return {undefined}
     */
    const setText = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    return (
        <>
            <BackDropSpinner isActive={fetching}/>
            <div className={styles.title}>
                {mainTitle}
            </div>
            <Form>
                <FormGroup>
                    <div className={styles.labelWrapper}>
                        <Home color='primary'/>
                        <Label for="name">{titles.name}</Label>
                    </div>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        value={state.title}
                        onChange={setText}
                        placeholder={'Название проекта...'}
                    />
                </FormGroup>
                <FormGroup>
                    <div className={styles.labelWrapper}>
                        <People color='primary'/>
                        <Label for="alias">{titles.alias}</Label>
                    </div>
                    <Input
                        type="text"
                        name="alias"
                        id="alias"
                        value={state.alias}
                        onChange={setText}
                        placeholder={'Alias...'}
                    />
                </FormGroup>
                <FormGroup>
                    <div className={styles.labelWrapper}>
                        <Computer color='primary'/>
                        <Label for="domain">{titles.domain}</Label>
                    </div>
                    <Input
                        type="text"
                        name="domain"
                        id="domain"
                        value={state.domain}
                        onChange={setText}
                        placeholder={'Домен...'}
                    />
                </FormGroup>
                <FormGroup>
                    <div className={styles.labelWrapper}>
                        <Description color='primary'/>
                        <Label for="description">{titles.description}</Label>
                    </div>
                    <Input
                        type="text"
                        name="description"
                        id="description"
                        value={state.description}
                        onChange={setText}
                        placeholder={'Описание...'}
                    />
                </FormGroup>
                <div className={styles.buttonsWrapper}>
                    <Button
                        color="success"
                        className={styles.btn}
                        onClick={save}
                    >
                        {titles.save}
                    </Button>
                    <Button
                        color="danger"
                        className={styles.btn}
                        onClick={close}
                    >
                        {titles.cancel}
                    </Button>
                </div>
            </Form>
        </>
    )
}

AsidePanel.propTypes = {
    addProject: PropTypes.func,
    close:      PropTypes.func,
    edit:       PropTypes.func,
    mainTitle:  PropTypes.string,
    project:    PropTypes.object,
    title:      PropTypes.string,
}

AsidePanel.defaultProps = {
    addProject: null,
    close:      () => null,
    edit:       null,
    mainTitle:  '',
    project:    {
        name:        '',
        alias:       '',
        domain:      '',
        description: '',
        id:          uniqid(),
    },
    title:      '',
}
