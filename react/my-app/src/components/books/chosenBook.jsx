import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import './ChosenBook.css';
import { useSelector } from 'react-redux';

export default function ChosenBook(props) {

  const handleonclick = (status) => {
    props.handleChosenClick(status)
  };

  const selectedBook = useSelector((state) => state.book.selectedBook)

  return (
    <div className="component reading-chapters-container" style={{ pointerEvents: 'auto' }}>
      <div className="component">
        <ul className="align">
          <li>
            <figure className="book">
              {/* Front */}
              <ul className="hardcover_front">
                <li>
                  <div className="coverImage" style={{ backgroundImage: `url(${`data:image/jpeg;base64,${selectedBook.image}`})` }}>
                    {selectedBook.currentChapter < selectedBook.numChapters ? <span className="ribbon">proccess</span> : <span className="ribbon">done</span>}
                  </div>

                </li>
                <li></li>
              </ul>

              {/* Pages */}
              <ul className="page">
                <li></li>
                <li>
                  <button className="btnChosenBook" onClick={() => handleonclick(2)}>
                    read the book
                  </button>
                  {selectedBook.currentChapter < selectedBook.numChapters &&
                    <button className="btnChosenBook" onClick={() => handleonclick(3)}>
                      suggested chaps
                    </button>}
                  {selectedBook.currentChapter < selectedBook.numChapters &&
                    <button className="btnChosenBook" onClick={() => handleonclick(4)}>
                      add own chapter
                    </button>
                  }
                  <button className="btnChosenBook" onClick={() => handleonclick(0)}>
                    return the book
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
                <h1>Name: {selectedBook.name}</h1>
                <span>Description: {selectedBook.description}</span>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>

  );
}
