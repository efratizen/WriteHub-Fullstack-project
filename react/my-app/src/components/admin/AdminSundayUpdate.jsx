import React, { useState, useEffect } from 'react';
import AdminScrollDialog from './AdminScrollDialog';
import { Typography } from '@mui/material';
import { getItems } from '../Utils';
import axios from "axios";

function AdminSundayUpdate({ handleFinish }) {
  const [index, setIndex] = useState(0);
  const [isScrollingDialog, setIsScrollingDialog] = useState(false)
  const [maxScoreOffers, setMaxScoreOffers] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletedOffers, setDeletedOffers] = useState([])
  const [presented, setPresented] = useState(false);

  // open the dialog of reading the offer woth high score
  const handleClickStart = () => {
    setIsScrollingDialog(true);
  }
  // close the dialog of reding offer with high score
  const handleClose = () => {
    setIsScrollingDialog(false)
  }

  // delete all offers of currentBook without the offer with high score
  const deleteData = async () => {
    try {
      const offerstoDelete = deletedOffers;
      const response = await axios.delete('http://localhost:8585/api/offers/deleteOffers-step2', {
        data: offerstoDelete,
      });
      console.log('Request successful', response);
    } catch (error) {
      console.error('Error making request', error);
    }
  };


  // adding the chpater to the book
  // adding the offer with high score to the delete list
  const handleSubmitScrollDialog = () => {
    if (index < maxScoreOffers.length) {
      deletedOffers.push(maxScoreOffers[index]);
      if (index < maxScoreOffers.length - 1)
        setIndex(index + 1)
    }
    if (index === maxScoreOffers.length - 1) {
      deleteData();
      handleFinish();
    }
    setIsScrollingDialog(false)
  }

  // get all the offer of books with max high score
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedChapters = await getItems("http://localhost:8585/api/offers/getChaptersOfMaxScoreDto-step1");
        setMaxScoreOffers(fetchedChapters);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []);


  useEffect(() => {
    if (maxScoreOffers.length > 0)
      setPresented(true)
  }, [maxScoreOffers])

  return (
    <>
      {presented && (
        <>
          {isScrollingDialog && (
            <AdminScrollDialog open={isScrollingDialog} handleClose={handleClose} handleSubmit={handleSubmitScrollDialog} handleUpdate={() => { }} maxOffer={maxScoreOffers[index]} />
          )}
          {loading ? (
            <Typography variant="h6">Loading...</Typography>
          ) : error ? (
            <Typography variant="h6" color="error">
              Error loading offer of max score offers: {error}
            </Typography>
          ) : (
            <div>
              <h1>name book: {maxScoreOffers[index].book.name}</h1>
              <button onClick={handleClickStart}>submit</button>
              <img src="src\assets\images\lets start.jpg" alt="Bookshelf" style={{
                position: 'absolute',
                width: '25%',
                marginTop: "17%",
                top: 0,
                left: 0,
                zIndex: 1,
              }} />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default AdminSundayUpdate;
