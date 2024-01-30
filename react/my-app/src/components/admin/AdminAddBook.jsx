import React, { useEffect, useState } from 'react';
import './AdminAddBook.css';
import { useDispatch } from 'react-redux';

export default function AdminAddBook({ handleFinish, setBookName }) {
  const dispatch = new useDispatch();
  const [book, setBook] = useState({
    id: 0,
    name: '',
    description: '',
    startTime: new Date().toISOString().split('T')[0],
    endTime: new Date().toISOString().split('T')[0]
    // + numChapters * 7
    ,
    numChapters: 0,
    currentChapter: 1,
  });
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  // handle uploading a cover book
  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  // At the end of complition the date of book
  const handleSubmit = async (e) => {
    e.preventDefault();
    setBookName(book.name)
    const updateBook = {
      ...book
    };
    dispatch({
      type: 'ADD_BOOK',
      payload: { updateBook, image }
    })
    handleFinish()
  }

  return (
    <div className="AdminAddBook-form-container">
      <form>
        <p>Name of the book:</p>
        <input
          type="text"
          id="AdminAddBook-name"
          name="name"
          value={book.name}
          onChange={handleChange}
          required
        />

        <p>Num Chapters:</p>
        <input
          type="number"
          id="AdminAddBook-numChapters"
          name="numChapters"
          value={book.numChapters}
          onChange={handleChange}
          required
        />

        <p>Description:</p>
        <textarea
          id="AdminAddBook-description"
          name="description"
          rows="8"
          value={book.description}
          onChange={handleChange}
          required
        ></textarea>

        <p>Upload Image:</p>
        <input
          type="file"
          id="AdminAddBook-image"
          name="image"
          onChange={handleFileUpload}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
