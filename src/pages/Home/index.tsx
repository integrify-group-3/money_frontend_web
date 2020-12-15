import React from 'react'
import {
  Button,
  Typography,
  ButtonGroup,
  Paper,
  Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import './style.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  paper: {
    /*     marginTop: '8rem',
     */ padding: theme.spacing(2),
    textAlign: 'center',
    margin: 'auto',
    color: theme.palette.text.secondary,
    minHeight: '350px',
    width: '400px',
    justifyContent: 'center',
    borderRadius: '10%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%)',
  },
  HeaderStyle: {
    color: '#886DFA',
  },
  buttonStyle: {
    display: 'block',
    border: 0,
    marginBottom: '20px',
    borderRadius: '10%',
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <Container className="home-page-container">
      <Paper className={classes.paper}>
        <Typography variant="h3" className={classes.HeaderStyle}>
          iMoney
        </Typography>
        <Typography color="primary" variant="h6">
          Couse your cash matters
        </Typography>
        <ButtonGroup
          orientation="vertical"
          className={classes.buttonStyle}
          aria-label="small outlined button group"
        >
          <Button
            component={Link}
            to="register"
            color="primary"
            variant="contained"
          >
            Join Today
          </Button>
          <Button
            color="secondary"
            variant="contained"
            component={Link}
            to="login"
          >
            Sign in
          </Button>
        </ButtonGroup>
      </Paper>
    </Container>
  )
}
