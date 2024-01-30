import React, { useState, useEffect } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Medal from '../../assets/images/medal.jpg'
import './StyleOurAuthors.css';

const OurAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);

  // share a add about current author to the friends
  const shareCard = async (name) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Surprise Announcement from WriteHub: Our Super Author!',
          text: `Check out this author: Exciting news! ${name} "Super Author" 
          has been chosen by our community. 
          The beautifully crafted chapter by ${name}, 
          our newly crowned "Super Author," 
          captivates readers with its enchanting prose and evocative storytelling. 
          WriteHub`,
        });
      } else {
        console.log('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  // get all authors
  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:8585/api/users/getAuthorsDto")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setAuthors(data);
      })
      .catch((error) => {
        console.error('Error fetching authors:', error);
        setError(error.message);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div style={{ marginTop: '10%', marginBottom: '40%' }} id='outhors'>

      <div class="AuthorAnimationcontainer">
        <span class="AuthorAnimationtext1">Our Authors</span>
        <span class="AuthorAnimationtext2">share your friends....</span>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {error ? (
            <Typography variant="h6" color="error">
              Error loading authors: {error}
            </Typography>
          ) : (
            authors.map((author, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <div className="cardAuthor">
                  <Card>
                    <CardHeader
                      avatar={<Avatar aria-label="recipe"
                        style={{ width: '50px', height: '50px' }}>
                        <img
                          src={`data:image/jpg;base64,${author.profile}`}
                          alt={`Avatar of ${author.firstName}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </Avatar>}
                      title={author.firstName}
                      subheader={author.description}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={Medal}
                      alt="Author Image"
                    />

                    <IconButton
                      aria-label="share"
                      onClick={() => shareCard(author.firstName + " " + author.lastName)}
                    >
                      <ShareIcon />
                    </IconButton>
                  </Card>
                </div>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default OurAuthors;
