
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import About from "./components/about/About";
import OurAuthors from "./components/ourAuthors/OurAuthors";
import Layout from "./components/Layout";
import MainBooks from './components/books/MainBooks'
import Comments from './components/comments/Comments';
import AddComment from './components/addComment/AddComment'
import ReadingBook from './components/readingBook/ReadingBook'
import AddChapter from './components/addChapter/AddChapter'
import ReadingChapters from './components/ReadingChapters/ReadingChapters'
import HomePage from './components/home/HomePage'
import MainAdminSundayUpdate from "./components/admin/MainAdminSundayUpdate";
import ScrollToTopOnRefresh from "./components/ScrollToTopRefresh";
import MainAdminAddBook from "./components/admin/MainAddBook";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = new useDispatch();
  useEffect(() => {
    dispatch({ type: 'GET_BOOKS' });
    dispatch({ type: 'GET_CHAPTERS' });
  }, []);

  return (
    <>
      <ScrollToTopOnRefresh></ScrollToTopOnRefresh>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="mainBooks" element={<MainBooks />} />
          <Route path="ourAuthors" element={<OurAuthors />} />
          <Route path="comments" element={<Comments />} />
          <Route path="addComment" element={<AddComment />} />
          <Route path="addChapter" element={<AddChapter />} />
          <Route path="readingBook" element={<ReadingBook />} />
          <Route path="readingChapters" element={<ReadingChapters />} />
          <Route path="addbook" element={<MainAdminAddBook />} />
          <Route path="updatebooks" element={<MainAdminSundayUpdate />} />

        </Routes>

      </Layout>





    </>


  );
}
