import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function OptionsBook(props) {
  const [state, setState] = useState({ open: false });

  // const toggleDrawer = (open) => (event) => {
  //   if (
  //     event.type === 'keydown' &&
  //     (event.key === 'Tab' || event.key === 'Shift')
  //   ) {
  //     return;
  //   }
  //   setState({ ...state, open });
  // };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <Divider />
      <List>
        {['Reading the book', 'Uploading a chapter', 'Reading the chapters'].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open Left</Button> */}
      <Drawer
        anchor={'left'}
        open={state.open}
        onClose={props.toggleDrawer(false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
}
