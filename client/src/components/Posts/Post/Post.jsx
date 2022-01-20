import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import BsLinkedin from "@material-ui/icons/LinkedIn";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import { FaHireAHelper } from "react-icons/fa";
import { Dialog, DialogActions, DialogContent } from "@material-ui/core/";

import { deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.profilePicture ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.name}
      />
      <div className={classes.overlay}>
        <Typography variant="h5">{post.name}</Typography>
        <Typography variant="body2">{post.email}</Typography>
        <Typography variant="body2">{post.phoneNumber}</Typography>
      </div>

      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(post._id);
            window.scrollTo(0, 0);
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <CardContent>
          <Typography variant="body2">
            <i>Location: </i>
            {post.location}
          </Typography>
          <Typography variant="body2">
            <i>Price per hour: </i>
            {post.pricePerHour}$
          </Typography>
          <Typography variant="body2">
            <i>Years of Experience:</i> {post.yearsOfExperience}
          </Typography>
          <Typography variant="body2">
            <i>Native Language: </i> {post.nativeLanguage}
          </Typography>
          <Typography variant="body2">
            <i>Technology: </i>
            {post.technology}
          </Typography>
          <Typography variant="body2">
            <i>Description: </i>
            {post.description}
          </Typography>
        </CardContent>
      </div>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `${post.linkedInUrl}`;
          }}
        >
          <BsLinkedin fontSize="medium" />
          Visit
        </Button>

        <div>
          <Button size="small" color="secondary" onClick={handleClickOpen}>
            <FaHireAHelper size={24} style={{ marginRight: "2px" }} />
            IRE
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <Typography>To hire a developer, please enter start and end date.</Typography>
              <input
                id="start-date"
                style={{ marginTop: "15px" }}
                type="date"
                label="Start Date"
                /* value={postData.email}
                onChange={(e) => setPostData({ ...postData, email: e.target.value })}*/
              />
              <input
                id="end-date"
                type="date"
                label="End Date"
                /* value={postData.email}
                onChange={(e) => setPostData({ ...postData, email: e.target.value })}*/
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Hire</Button>
            </DialogActions>
          </Dialog>
        </div>

        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
