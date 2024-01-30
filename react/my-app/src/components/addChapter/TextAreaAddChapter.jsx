import React, { useState } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';


export default function TextAreaAddChapter({ handlePostOffer }) {
  const [italic, setItalic] = useState(false);
  const [fontWeight, setFontWeight] = useState('normal');
  const [anchorEl, setAnchorEl] = useState(null);
  const [text, setText] = useState('');
  // limit the number of characters
  const characterLimit = 5000;

  // Hundle the input of user
  const handleTextChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= characterLimit) {
      setText(inputText);
    }
  };



  return (
    <div className='addChapter'>
      <div className='addChapter-textAreaChapter'>
        <FormControl sx={{ marginTop: '36%' ,width:"10%"}}>
          <Textarea
            placeholder="Type something here…"
            minRows={3}
            maxRows={4}
            value={text}
            onChange={handleTextChange}
            endDecorator={
              <Box
                sx={{
                  display: 'flex',
                  gap: 'var(--Textarea-paddingBlock)',
                  pt: 'var(--Textarea-paddingBlock)',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  flex: 'auto',
                }}
              >
                <IconButton
                  variant="plain"
                  color="neutral"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <FormatBold />
                  <KeyboardArrowDown fontSize="md" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  size="sm"
                  placement="bottom-start"
                  sx={{ '--ListItemDecorator-size': '24px' }}
                >
                  {['200', 'normal', 'bold'].map((weight) => (
                    <MenuItem
                      key={weight}
                      selected={fontWeight === weight}
                      onClick={() => {
                        setFontWeight(weight);
                        setAnchorEl(null);
                      }}
                      sx={{ fontWeight: weight }}
                    >
                      <ListItemDecorator>
                        {fontWeight === weight && <Check fontSize="sm" />}
                      </ListItemDecorator>
                      {weight === '200' ? 'lighter' : weight}
                    </MenuItem>
                  ))}
                </Menu>
                <IconButton
                  variant={italic ? 'soft' : 'plain'}
                  color={italic ? 'primary' : 'neutral'}
                  aria-pressed={italic}
                  onClick={() => setItalic((bool) => !bool)}
                >
                  <FormatItalic />
                </IconButton>
                <Button sx={{ ml: 'auto' }} onClick={() => { handlePostOffer(text) }}>Send</Button>
              </Box>
            }
            sx={{
              minWidth: 500,
              fontStyle: italic ? 'italic' : 'initial',
              height: '500px',
              width: '800%',
            }}
          />
          <p>
            Characters written: {text.length}/{characterLimit}
          </p>
        </FormControl>
      </div>
    </div>
  );
}
