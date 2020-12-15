import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import {
  CssBaseline,
  TextField,
  makeStyles,
  Typography,
  Grid,
  Box,
  Container,
} from '@material-ui/core'

import { loginUser } from '../../redux/actions/auth'

import './style.scss'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage:
      'linear-gradient(to right, rgba(243, 239, 234, 0.8), rgba(225, 219, 236, 0.8))',
    borderRadius: '25px',
    marginTop: '4rem',
    padding: '1rem 2rem',
  },
  inputField: {
    borderRadius: '25px',
  },
  inputAlign: {
    display: 'inline-block',
    width: '48%',
    marginRight: '2%',
    margin: 'auto',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#865CFF',
    color: 'white',
    borderRadius: '50px',
  },
}))

export default function Register() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(loginUser(user))
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }
  return (
    <div className="login-page-container">
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="firstname"
              name="firstname"
              onChange={handleChange}
              autoComplete="firstname"
              label="firstname"
              className={`${classes.inputField} ${classes.inputAlign}`}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="lastname"
              name="lastname"
              onChange={handleChange}
              autoComplete="lastname"
              label="lastname"
              className={`${classes.inputField} ${classes.inputAlign}`}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              onChange={handleChange}
              autoComplete="email"
              label="email"
              className={classes.inputField}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              autoComplete="current-password"
              label="password"
              className={classes.inputField}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <NavLink to="/login">
                  {'Already have an account? Login'}
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  )
}
