import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { TextInput } from 'components/sign-in/Text-field'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Link as MUILink } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { Copyright } from 'components/sign-in/Copyright'
import { useStyles } from 'containers/Sign-in/styles'
import { Link } from 'react-router-dom'
import { Alert } from 'reactstrap'

/**
 * Render Sign-in page
 *
 * @returns {*}
 * @constructor
 */
export const SignIn = ({ history }) => {
    const [state, setState] = useState({
        email:     '',
        password:  '',
        showAlert: false,
    })

    /**
     * Set text of the inputs to state
     *
     * @param {Object} event
     *
     * @return {undefined}
     */
    const setText = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    /**
     * Show alert with sign-in tip
     *
     * @return {undefined}
     */
    const getAlert = () => {
        setState({ ...state, showAlert: true })
        setTimeout(() => setState({ ...state, showAlert: false }), 4000)
    }

    /**
     * Validate method
     *
     * @return {undefined}
     */
    const validate = () => {
        const { email, password } = state
        if (email === 'test' && password === 'test') {
            return history.push('/home')
        }
        return getAlert()
    }

    const classes = useStyles()

    const { showAlert } = state
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                {showAlert && <Alert color="success">
                    <span>Для входа используйте: email: </span>
                    <b>test </b>
                    <span>password: </span>
                    <b>test</b>
                </Alert>}
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {'Вход в панель управления'}
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextInput
                            onChange={setText}
                            name="email"
                            label="Адрес электронной почты"
                            required autoFocus
                        />
                        <TextInput
                            onChange={setText}
                            name="password"
                            label="Пароль"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Запомнить меня"
                        />
                        <Link to={'#'} onClick={validate}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                {'Войти в систему'}
                            </Button>
                        </Link>
                        <Grid container>
                            <Grid item xs>
                                <MUILink href="#" variant="body2">
                                    {'Восстановить пароль'}
                                </MUILink>
                            </Grid>
                            <Grid item>
                                <MUILink href="#" variant="body2">
                                    {'Связаться с администратором'}
                                </MUILink>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}
