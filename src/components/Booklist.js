import React from "react";
import { books } from "../data/books";
function Book({ imageUrl, title, author }) {
  return (
    <>
      <div className='col'>
        <img className='img-fluid' src={imageUrl} alt='' />
        <h2
          onClick={(e) => {
            console.log(e.target.innerHTML);
          }}>
          {title}
        </h2>
        <h3>{author}</h3>
      </div>
    </>
  );
}

export default function Booklist() {
  return (
    <>
      <div className='row row-cols-6'>
        {books.map((item) => {
          return <Book {...item} key={item.id} />;
        })}
      </div>
    </>
  );
}
