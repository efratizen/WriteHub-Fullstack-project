import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';

const ScrollDialogReadingChapters = ({ open, onClose, onPostComment, handleStatusToComments }) => {
  const offer = useSelector((state) => state.offer.selectedOffer)
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle id="scroll-dialog-title">bid</DialogTitle>
        <DialogContent dividers style={{ display: 'flex', overflow: 'hidden' }}>
          <div className="containerAniRead" style={{}}>

            <div className="book one"></div>
            <div className="book two">
              <span></span>
            </div>
            <div className="book three"></div>
            <div className="book four"></div>
            <div className="book five"></div>
            <div className="child">
              <div className="headAniRead">
                <div className="hair"></div>
                <span className="rtch"></span>
                <span className="glasses"></span>
              </div>
              <div className="bodyAniRead">
                <div className="hand-one"></div>
                <div className="hand-two"></div>
                <div className="book-read">
                  <span className="letter r">R</span>
                  <span className="letter e">E</span>
                  <span className="letter a">A</span>
                  <span className="letter d">D</span>
                </div>
              </div>
              <div className="legs">
                <div className="leg-one"></div>
                <div className="leg-two"></div>

              </div>
            </div>
          </div>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
            style={{ flex: 1, overflowY: 'auto' }}
          >
            {/* אם יש תוכן אז תעבור בלולאה על רשימת התוכן שידפיס */}
            {offer.contentList.map((content, index) => (
              <p key={index}>{content}</p>

            ))}

          </DialogContentText>


        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={() => { handleStatusToComments() }}>Reading Comment</Button>
          <Button onClick={() => { onPostComment(); onClose(); }}>Post Comment</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ScrollDialogReadingChapters;
