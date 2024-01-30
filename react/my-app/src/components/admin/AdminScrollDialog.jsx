import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

const AdminScrollDialog = ({ open, handleClose, handleSubmit, maxOffer }) => {
    console.log("offer", { maxOffer });

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="lg"
                fullWidth
            >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent dividers style={{ display: 'flex', overflow: 'hidden' }}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                        style={{ flex: 1, overflowY: 'auto' }}
                    >
                        {/* אם יש תוכן אז תעבור בלולאה על רשימת התוכן שידפיס */}
                        {maxOffer.contentList.map((content, index) => (
                            <Typography key={index}>{content}</Typography>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default AdminScrollDialog;
