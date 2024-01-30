import React from 'react';
import './StyleAddChapter.css'
import TextAreaAddChapter from './TextAreaAddChapter'
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import MainForm from '../form/MainForm';
function AddChapter({ handleFinish }) {


  const dispatch = new useDispatch();
  const myUser = useSelector((state) => state.user.myUser);
  const [openMainForm, setOpenMainForm] = useState(false);
  const selectedBook = useSelector((state) => state.book.selectedBook)
  const listChapters = useSelector((state) => state.chapter.listChapters)
  const [offer, setOffer] = useState({
    "id": 0,
    "score": 0,
    "dateUpload": new Date().toISOString().split('T')[0],
    "contentList": [],
    "commentList": [],
    "chapter": {
      "id": 0,
    },
    "user": {
      "id": myUser.id,
    },
    "book": {
      "id": selectedBook.id,
    }

  })


  // At the sending offer ...
  const handlePostOffer = async (text) => {

    let id = 0
    listChapters.forEach((chapter) => {
      if (chapter.book.id === selectedBook.id && chapter.numChapter === selectedBook.currentChapter) {
        id = chapter.id
      }
    })

    if (myUser.id == -1) {
      alert("you are not login")
      setOpenMainForm(true);
      return; // Stop further execution
    }
    setOpenMainForm(false);
    if (id == 0) {
      alret("conected problem, please refresh the page"); return;
    }
    else {
      const updatedOffer = {
        ...offer,
        chapter: {
          id: id
        },
        contentList: text.split('\n'),
      };

      try {
        const response = await axios.post('http://localhost:8585/api/offers/uploadOfferDto', updatedOffer);
        console.log('offer posted:', response.data);
        handleFinish(1);
      } catch (error) {
        console.error('Error posting comment:', error);
        handleFinish(-1);
      }
    }

  }


  return (
    <>
      <div className='addChapter'>
      <Grid container spacing={1}>
          {openMainForm && <MainForm></MainForm>}
          <Grid item xs={2} md={8}>
            <div className="addChapter-wrapperChapter">
              <div className="addChapter-pen">
                <div className="addChapter-body-pen">
                  <div className="addChapter-white-stripe"></div>
                  <div className="addChapter-black-stripe"></div>
                </div>
                <div className="addChapter-head-pen">
                  <div className="addChapter-mine"></div>
                </div>
              </div>

              <div className="addChapter-paper">
                1. Punctuation Perfection: Ensure correct punctuation in your proposal to enhance readability and coherence.<br></br><br></br>

                2. Conciseness is Key: Limit your proposal to a maximum of 40 lines. Keep it concise and focused to maintain reader engagement.<br></br><br></br>

                3. Clarity is Crucial: Craft your content with clarity in mind. Make sure your ideas are expressed in a way that is easy for readers to understand.<br></br><br></br>

                4. Clean and Cohesive: Present a polished piece by proofreading your proposal. Remove any typos or grammatical errors for a clean and cohesive contribution.
              </div>

            </div>


          </Grid>

          <Grid item xs={2} md={2}>
          <div className='addChapter-textAreaChapter1' style={{marginTop:"30%"}}>
              <TextAreaAddChapter handlePostOffer={handlePostOffer}></TextAreaAddChapter>
            </div>
          </Grid>

        </Grid>
      </div>
    </>
  );
}
export default AddChapter;
