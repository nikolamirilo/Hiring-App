import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'
import { useAuth } from '../../contexts/AuthContext'

import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    profilePicture: '',
    pricePerHour: '',
    technology: '',
    description: '',
    yearsOfExperience: 0,
    nativeLanguage: '',
    linkedInUrl: '',
  })
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null))
  const dispatch = useDispatch()
  const classes = useStyles()

  const { user } = useAuth()
  let currentUser = user.email
  currentUser = currentUser.split('@')[0]

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const clear = () => {
    setCurrentId(0)
    setPostData({
      name: '',
      email: '',
      phoneNumber: '',
      location: '',
      profilePicture: '',
      pricePerHour: '',
      technology: '',
      description: '',
      yearsOfExperience: '',
      nativeLanguage: '',
      linkedInUrl: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      currentId === 0 &&
      postData.name !== '' &&
      postData.email !== '' &&
      postData.phoneNumber !== '' &&
      postData.location !== '' &&
      postData.technology !== '' &&
      postData.yearsOfExperience !== '' &&
      postData.nativeLanguage !== ''
    ) {
      dispatch(createPost(postData))
      clear()
    } else if (
      currentId !== 0 &&
      postData.name !== '' &&
      postData.email !== '' &&
      postData.phoneNumber !== '' &&
      postData.location !== '' &&
      postData.technology !== '' &&
      postData.yearsOfExperience !== '' &&
      postData.nativeLanguage !== ''
    ) {
      dispatch(updatePost(currentId, postData))
      clear()
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.name}"` : `Create a profile ${currentUser}`}</Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Name (required)"
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
        <TextField
          name="email"
          variant="outlined"
          label="Email (required)"
          fullWidth
          value={postData.email}
          onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        />
        <TextField
          name="phone number"
          variant="outlined"
          label="Phone Number (required)"
          fullWidth
          value={postData.phoneNumber}
          onChange={(e) => setPostData({ ...postData, phoneNumber: e.target.value })}
        />
        <TextField
          name="location"
          optional
          variant="outlined"
          label="Location (required)"
          fullWidth
          value={postData.location}
          onChange={(e) => setPostData({ ...postData, location: e.target.value })}
        />
        <TextField
          name="price per hour"
          variant="outlined"
          label="Price Per Hour $ (required)"
          fullWidth
          value={postData.pricePerHour}
          onChange={(e) => setPostData({ ...postData, pricePerHour: e.target.value })}
        />

        <select
          id="technology-combobox"
          value={postData.technology}
          onChange={(e) => setPostData({ ...postData, technology: e.target.value })}
          label="Technology"
        >
          <option id="first-option">Select a technology (required)</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
          <option value=".NET">.NET</option>
          <option value="Flutter">Flutter</option>
          <option value="Python">Python</option>
          <option value="PHP">PHP</option>
        </select>
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={postData.description}
          onChange={(e) => setPostData({ ...postData, description: e.target.value })}
        />
        <TextField
          name="years of experience"
          variant="outlined"
          label="Years of Experience  (required)"
          fullWidth
          value={postData.yearsOfExperience}
          onChange={(e) => setPostData({ ...postData, yearsOfExperience: e.target.value })}
        />
        <select id="native-language-combobox" value={postData.nativeLanguage} onChange={(e) => setPostData({ ...postData, nativeLanguage: e.target.value })}>
          <option id="first-option">Select a native language (required)</option>
          <option value="Serbian">Serbian</option>
          <option value="Bulgarian">Bulgarian</option>
          <option value="English">English</option>
        </select>
        <TextField
          name="linkedIn url"
          variant="outlined"
          label="Linkedin Url"
          fullWidth
          value={postData.linkedInUrl}
          onChange={(e) => setPostData({ ...postData, linkedInUrl: e.target.value })}
        />
        <div className={classes.fileInput} id="file-input">
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, profilePicture: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form
