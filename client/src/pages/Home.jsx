import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Posts from '../components/Posts/Posts'
import Form from '../components/Form/Form'
import { getPosts } from '../actions/posts'
import useStyles from '../styles'
import handshake from '../images/handshake.png'

const Home = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg" className={classes.container}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Hiring App
        </Typography>
        <img className={classes.image} src={handshake} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Button
                variant="contained"
                color="warning"
                size="small"
                fullWidth
                style={{ marginTop: '10%', width: '90%', marginLeft: '5%', height: '5vh', backgroundColor: 'purple', color: 'white', fontSize: '1rem' }}
              >
                <b>Hire a team of developers</b>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default Home
