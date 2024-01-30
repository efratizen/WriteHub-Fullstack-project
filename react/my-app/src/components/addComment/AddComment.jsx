import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextAreaAddComment from './TextAreaAddComment';
import HoverRating from './HoverRating';
import { useSelector } from 'react-redux';
import axios from "axios";

function AddCommentDialog({ open, onClose }) {
  const selectedOffer = useSelector((state) => state.offer.selectedOffer)
  const handleDialogClose = () => {
    onClose();
  };
  const [starScore, setStarScore] = useState(0);
  const [commentText, setCommentText] = useState("");
  const myUser = useSelector((state) => state.user.myUser)
  const [comment, setComment] = useState({
    "id": 0,
    "date": new Date().toISOString().split('T')[0],
    "content": "",
    "score": 0,
    "offer": {
      "id": selectedOffer.id
    },
    "user": {
      "id": myUser.id
    }
  })

  function handleStarScore(stars) {
    setStarScore(stars)
  }

  function handleCommentText(text) { setCommentText(text) }

  // upload a comment
  const handlePostComment = async () => {
    const updatedComment = {
      ...comment,
      score: starScore,
      content: commentText,
    };
    setComment(updatedComment);

    console.log("Updated Comment:", updatedComment);
    try {
      const response = await axios.post('http://localhost:8585/api/comments/postComment', updatedComment);
      onClose();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  }

  return (
    <Dialog open={open} onClose={handleDialogClose} PaperProps={{ style: { maxWidth: '100%' } }}>
      <DialogTitle className='addCommentTitle'>How would you rate this chapter?</DialogTitle>
      <DialogContent>
        <div className='starsAddComment'>
          <HoverRating handleStarScore={handleStarScore}></HoverRating>
        </div>
        <div className='textAddComment'>
          <TextAreaAddComment handleCommentText={handleCommentText}></TextAreaAddComment>
        </div>
        <Button sx={{ ml: 'auto', variant: "contained", color: "primary" }} onClick={handlePostComment}>Send</Button>

      </DialogContent>
      <DialogActions>
      </DialogActions>
    </Dialog>
  );
}

export default AddCommentDialog;
