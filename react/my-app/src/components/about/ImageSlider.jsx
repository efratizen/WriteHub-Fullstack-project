import React, { useState, useEffect } from "react";
import './styleImageSlider.css'


export default function ImageSlider() {
  return (
    <>
    <div className="textAbout" >
  <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
  
  </p>
</div>
  <div className="bodyImg">
  {/* <div className="marquee">
  <div className="marquee__group">
    <img src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3MzQ&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1583511666445-775f1f2116f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3MzQ&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1586917383423-c25e88ac05ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3NzU&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1560743173-567a3b5658b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3NzU&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1603232644140-bb47da511b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
  </div>

  <div aria-hidden="true" className="marquee__group">
    <img src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3MzQ&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1583511666445-775f1f2116f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3MzQ&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1586917383423-c25e88ac05ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3NzU&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1560743173-567a3b5658b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3NzU&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1603232644140-bb47da511b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
  </div>
</div> */}



<div className="marquee marquee--reverse">
  <div className="marquee__group">
    <img src='https://images.unsplash.com/photo-1546421845-6471bdcf3edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1518378188025-22bd89516ee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1571772805064-207c8435df79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1602067340370-bdcebe8d1930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDUyMTM&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1508948956644-0017e845d797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDUyMTM&ixlib=rb-1.2.1&q=80&w=400' alt='' />
  </div>

  <div aria-hidden="true" className="marquee__group">
    <img src='https://images.unsplash.com/photo-1546421845-6471bdcf3edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1518378188025-22bd89516ee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1571772805064-207c8435df79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1602067340370-bdcebe8d1930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDUyMTM&ixlib=rb-1.2.1&q=80&w=400' alt='' />
    <img src='https://images.unsplash.com/photo-1508948956644-0017e845d797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDUyMTM&ixlib=rb-1.2.1&q=80&w=400' alt='' />
  </div>
</div>

</div>
</>
  )
}
