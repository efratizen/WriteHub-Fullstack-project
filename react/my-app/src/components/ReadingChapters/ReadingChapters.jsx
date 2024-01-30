import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './StyleReadingChapters.css';
import ScrollDialogReadingChapters from './ScrollDialogReadingChapters';
import AddComment from '../addComment/AddComment';
import Comments from '../comments/Comments';
import { getItems } from '../Utils';
import { useDispatch, useSelector } from 'react-redux';
import MainForm from '../form/MainForm';
import { updateOffer } from '../../redux/reducers/offersReducer';

export default function ReadingChapters(props) {
  const [isScrollDialogOpen, setScrollDialogOpen] = useState(false);
  const [isResponseDialogOpen, setResponseDialogOpen] = useState(false);
  const [suggestedChapters, setSuggestedChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isReadingComments, setReadingComments] = useState(false);
  const [openMainForm, setOpenMainForm] = useState(false);

  const selectedBook = useSelector((state) => state.book.selectedBook)
  const myUser = useSelector((state) => state.user.myUser)
  const dispatch = useDispatch();

  const handleOpenScrollDialog = (offer) => {
    setScrollDialogOpen(true);
    dispatch(updateOffer(offer))
    console.log("offerrr", selectedOffer)
  };
  const handleCloseScrollDialog = () => {
    setScrollDialogOpen(false);
  };

  const handlePostComment = () => {
    if (myUser.id == -1) {
      setOpenMainForm(true);
      return; // Stop further execution
    }
    setOpenMainForm(false);
    if (myUser.id == selectedOffer.user.id) {
      alert("you are not allowed to rate yourself!!!")
      return;
    }
    setResponseDialogOpen(true);
  };
  const handleCloseResponseDialog = () => {
    setResponseDialogOpen(false);
  };

  //  get all the offers to the selected book
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedChapters = await getItems(`http://localhost:8585/api/offers/suggestedChaptersDto/${selectedBook.id}`);
        setSuggestedChapters(fetchedChapters);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching suggested chapters:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []);

  const selectedOffer = useSelector((state) => state.offer.selectedOffer)


  return (

    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h3" sx={{ color: '#0D98A0', marginLeft: '30%', marginBottom: '20px', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' }}>
        Name of Book: {selectedBook.name}
      </Typography>
      <Typography variant="h5" sx={{ color: '#62C7D7', marginLeft: '40%', fontStyle: 'italic', marginBottom: '20px' }}>
        Number of Chapters: {selectedBook.currentChapter}
      </Typography>
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : error ? (
        <Typography variant="h6" color="error">
          Error loading suggested chapters: {error}
        </Typography>
      ) : (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {suggestedChapters.map((offer, index) => (

            <Grid item xs={2} sm={4} md={4} key={index}>

              <div className="component">
                <ul className="align">
                  <li>
                    <figure className="book">
                      {/* Front */}
                      <ul className="hardcover_front">
                        <li>
                          <div className="coverImage" style={{ backgroundImage: `url(${`data:image/jpeg;base64,${selectedBook.image}`})` }}>
                            <span className="ribbon">proccess</span>

                          </div>
                        </li>
                        <li></li>
                      </ul>

                      {/* Pages */}
                      <ul className="page">
                        <li></li>
                        <li>
                          <button
                            className="btnToRead"
                            onClick={() => handleOpenScrollDialog(offer)}
                          >
                            I want to read
                          </button>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>

                      {/* Back */}
                      <ul className="hardcover_back">
                        <li></li>
                        <li></li>
                      </ul>
                      <ul className="book_spine">
                        <li></li>
                        <li></li>
                      </ul>
                      <figcaption>
                        <h3>By Author:{offer.user.literaryName}</h3>
                        <span>{offer.dateUpload}</span>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      )}

      {isScrollDialogOpen && selectedOffer && (
        <ScrollDialogReadingChapters
          open={isScrollDialogOpen}
          onClose={handleCloseScrollDialog}
          onPostComment={handlePostComment}
          handleStatusToComments={props.handleStatusToComments}

        />
      )}
      {openMainForm && (
        <MainForm></MainForm>
      )}
      {isResponseDialogOpen && (
        <AddComment
          open={isResponseDialogOpen}
          onClose={handleCloseResponseDialog}
        />
      )}
      {isReadingComments && (
        <Comments></Comments>
      )
      }
    </Box>
  );
}
