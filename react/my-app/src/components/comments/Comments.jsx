import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';
import './StyleComments.css';
import { getItems } from '../Utils';
const Item = ({ children }) => (
  <div style={{ margin: '10px' }}>{children}</div>
);

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return labels[value];
}

const Comments = () => {
  const selectedOffer = useSelector((state) => state.offer.selectedOffer)
  console.log("offer id", selectedOffer);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedComments = await getItems(`http://localhost:8585/api/comments/commentByOfferIdDto/${selectedOffer.id}`);
        setComments(fetchedComments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <>
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : error ? (
        <Typography variant="h6" color="error">
          Error loading comments: {error}
        </Typography>
      ) : (
        <>
          {comments.map((comment, index) => (
            <Item key={index}>
              <Card className="card" variant="outlined">
                <CardContent>
                  <Box className="header">
                    <Box className="avatar">
                      <Avatar aria-label="recipe"
                        style={{ width: '50px', height: '50px' }}>
                        <img
                          src={`data:image/jpg;base64,${comment.user.profile}`}
                          alt={`Avatar of ${comment.user.firstName}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </Avatar>                    </Box>
                    <Box className="content">
                      <Typography variant="h6">{comment.user.literaryName}</Typography>
                    </Box>
                    <Box className="rating" display="flex">
                      <Rating
                        name={`comment-rating-${index}`}
                        value={comment.score}
                        precision={0.5}
                        getLabelText={getLabelText}
                        icon={<StarIcon style={{ fontSize: 30 }} />}
                        emptyIcon={<StarIcon style={{ fontSize: 30, opacity: 0.55, color: 'grey' }} />}
                        readOnly
                      />
                      <Typography variant="body2" className="rating-label" sx={{ marginLeft: '4%' }}>
                        {getLabelText(comment.score)}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="content">
                    <Typography variant="body2">{comment.content}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Item>
          ))}
        </>
      )}
    </>
  );
};

export default Comments;
