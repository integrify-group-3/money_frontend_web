import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  input: {
    borderRadius: '25px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#865CFF',
    color: 'white',
    borderRadius: '50px',
  },
}))

export default function Login() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(loginUser(user))
    console.log(user)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
    console.log(name, value)
  }
  return (
    <div className="login-page-container">
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleChange}
              autoComplete="email"
              className={classes.input}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              autoComplete="current-password"
              className={classes.input}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/register">
                  {"Don't have an account? Sign Up"}
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
