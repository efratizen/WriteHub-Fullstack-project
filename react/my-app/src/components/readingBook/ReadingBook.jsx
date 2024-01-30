import React, { useState, useEffect } from 'react';
import './StyleReadingBook.css'
import Content from './Content'
import { useSelector } from 'react-redux';
import { Button, Grid, Typography } from '@mui/material';
import { getItems } from '../Utils';

function ReadingBook({ handleSelectedbookStatus }) {
  const [contentBook, setContentBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // get all chapters of the selected book
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedChapters = await getItems(`http://localhost:8585/api/offers/bookChaptersDto/${selectedBook.id}`);
        setContentBook(fetchedChapters);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching content book:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []);

  const selectedBook = useSelector((state) => state.book.selectedBook)
  return (
    <>
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : error ? (
        <Typography variant="h6" color="error">
          Error loading content book: {error}
        </Typography>
      ) : (

        <div id="book">
          <div id="wrapperBook">
            <div id="containerBook">
              <section className="open-book" style={{ width: '100%', height: 'auto' }}>
                {console.log(contentBook)}
                {/* נותן את העגול בדפים למעלה */}
                <header>

                  {contentBook.length > 0 ? (
                    <Content contentBook={contentBook} handleSelectedbookStatus={() => { handleSelectedbookStatus() }}></Content>
                  ) : console.log("emptyyyyyyyyyy")
                  }
                </header>

              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReadingBook;
