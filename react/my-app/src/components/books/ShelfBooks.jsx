
import React from 'react';
import { Button, ButtonBase } from '@mui/material';
import './ShelfBooks.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function ShelfBooks(props) {
  const handleOnClick = (book, index) => {
    props.handleButtonClick(book, index, 1);
  };

  const handleNextScrolling = () => {
    props.handleIndices(1);
  };

  const handleBackScrolling = () => {
    props.handleIndices(-1);
  };

  return (
    <div className="component book-shelf" style={{ pointerEvents: 'none' }}>
      <div className="bookshelf">
        <Button onClick={handleBackScrolling} style={{ pointerEvents: 'all' }}>
          back
        </Button>
        <div className="books">
          {props.books.map((book, index) => (
            props.buttonVisibility[index] &&
            (
              <ButtonBase
                key={index}
                component="div"
                className="bookonshelf"
                style={{
                  '--bg-image': `url(data:image/jpg;base64,${book.image})`,
                  pointerEvents: 'all',
                }}
                onClick={() => handleOnClick(book, index)}
              />
            )
          ))}
        </div>
        <Button onClick={handleNextScrolling} style={{ pointerEvents: 'all' }}>
          next
        </Button>
      </div>
    </div>
  );
}

export default ShelfBooks;
