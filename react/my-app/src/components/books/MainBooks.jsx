import React, { useState, useEffect } from "react";
import ChosenBook from "./ChosenBook";
import ShelfBooks from "./ShelfBooks";
import MainAddChapter from "../addChapter/MainAddChapter";
import ReadingBook from '../readingBook/ReadingBook'
import ReadingChapters from '../ReadingChapters/ReadingChapters'
import Comments from '../comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedBook } from "../../redux/reducers/booksReducer";

export default function Books() {
  const dispatch = useDispatch();
  const [bookStatus, setBookStatus] = useState(0);
  const [buttonVisibility, setButtonVisibility] = useState([]); // Assuming you have three buttons
  const [indices, setIndicies] = useState(0)
  const [book, setBook] = useState({});
  const isLoading = useSelector((state) => state.book.isLoading);
  const books = useSelector((state) => state.book.listBooks)

  useEffect(() => {
    dispatch({ type: 'GET_BOOKS' });
    dispatch({ type: 'GET_CHAPTERS' });
    const totalBooks = books.length;
    const x = totalBooks > 4 ? 4 : totalBooks;
    const initialVisibility = Array(totalBooks).fill(false);
    for (let i = 0; i < x; i++) {
      initialVisibility[i] = true;
    }
    setButtonVisibility(initialVisibility);

  }, []);

  useEffect(() => {
    if (books) {
      const totalBooks = books.length;
      const x = totalBooks > 4 ? 4 : totalBooks;
      const initialVisibility = Array(totalBooks).fill(false);
      for (let i = 0; i < x; i++) {
        initialVisibility[i] = true;
      }
      setButtonVisibility(initialVisibility);
    }
  }, [books]);

  const handleSelectedbookStatus = () => {
    setBookStatus(1)
  }

  const handleIndices = (num) => {
    if (num === 1 && indices + 3 < buttonVisibility.length) {
      setButtonVisibility((prevVisibility) => {
        const updatedVisibility = [...prevVisibility];
        updatedVisibility[indices] = false;
        setIndicies(indices + num)
        updatedVisibility[indices + 4] = true;
        return updatedVisibility;
      });
    }
    else if (num === -1 && indices > 0) {
      setButtonVisibility((prevVisibility) => {
        const updatedVisibility = [...prevVisibility];
        updatedVisibility[indices - 1] = true;
        setIndicies(indices + num)
        updatedVisibility[indices + 3] = false;
        return updatedVisibility;
      });
    }
  }

  function handleChosenClick(status) {
    for (let i = 0; i < 4; i++) {
      setButtonVisibility((prevVisibility) => {
        const updatedVisibility = [...prevVisibility];
        updatedVisibility[indices + i] = true;
        return updatedVisibility;
      });
    }

    setBookStatus(status)
  }

  const handleButtonClick = (book, index, num) => {
    dispatch(updateSelectedBook(book));
    for (let i = 0; i < 4; i++) {
      setButtonVisibility((prevVisibility) => {
        const updatedVisibility = [...prevVisibility];
        if ((indices + i) === index) {
          updatedVisibility[indices + i] = false;
        }
        else {
          updatedVisibility[indices + i] = true;
        }
        return updatedVisibility;
      });
    }
    setBookStatus(num)
  };

  const handleStatusToComments = () => {
    setBookStatus(5)
  };
  const renderComponent = () => {
    switch (bookStatus) {
      case 0:
        return (<><ShelfBooks handleIndices={handleIndices} handleButtonClick={handleButtonClick} buttonVisibility={buttonVisibility} books={books}></ShelfBooks>;
          <img src="src\assets\images\to the bookshelf.jpg" alt="Bookshelf" style={{
            position: 'absolute',
            marginTop: "5%",
            left: 0,
            width: '20%',
            zIndex: 1,
          }} />
        </>);
      case 1:
        return (<>
          <ShelfBooks handleIndices={handleIndices} handleButtonClick={handleButtonClick} buttonVisibility={buttonVisibility} books={books}></ShelfBooks>;
          <ChosenBook handleChosenClick={handleChosenClick}></ChosenBook>
          <img src="src\assets\images\to the bookshelf.jpg" alt="Bookshelf" style={{
            position: 'absolute',
            width: '20%',
            marginTop: "27%",
            top: 0,
            left: 0,
            zIndex: 1,
          }} />
        </>);
      case 2:
        return (<><button onClick={handleSelectedbookStatus}>-back-</button>,
          <ReadingBook handleSelectedbookStatus={handleSelectedbookStatus}></ReadingBook></>);
      case 3:
        return (<><button onClick={handleSelectedbookStatus}>-back-</button>,
          <ReadingChapters handleStatusToComments={handleStatusToComments} handleSelectedbookStatus={handleSelectedbookStatus}></ReadingChapters></>);
      case 4:
        return (<><button onClick={handleSelectedbookStatus}>-back-</button>,
          <MainAddChapter gotosugg={() => { setBookStatus(3) }}></MainAddChapter></>);
      case 5:
        return <Comments></Comments>
      default:
        return null; // Handle the default case if necessary
    }
  };
  return (
    <div style={{ marginTop: '21%', marginBottom: '30%' }}>
      {
        books &&
        renderComponent()
      }

    </div>
  )
}