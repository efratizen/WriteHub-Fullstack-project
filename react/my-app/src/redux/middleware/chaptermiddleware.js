import axios from 'axios';

import { getChapters } from '../reducers/chaptersReducer';

export const gettChaptersMidd = ({dispatch,getState})=>next=>action=>{
    if(action.type === 'GET_CHAPTERS'){
     axios.get("http://localhost:8585/api/chapters/get")
     .then((response)=>{
         console.log('response.data GET_CHAPTERS',response.data);
         dispatch(getChapters(response.data));
     })
     .catch((error)=>{
        console.error('Error fetching chapters:', error);
     })
    }
 
    return next(action);
 };
