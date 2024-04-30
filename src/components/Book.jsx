import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  console.log(book);
  const { image, price, title, subtitle,isbn13 } = book;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-2xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{subtitle}</h2>
        <p className="font-bold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/book/${isbn13}`}>
            <button className="btn btn-primary">Book Detels</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
