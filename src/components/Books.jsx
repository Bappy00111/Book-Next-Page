import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";

const Books = () => {
  const navigation = useNavigation();
  console.log(navigation);
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  const bookData = useLoaderData();
  //   console.log(bookData.books);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 px-4">
      {bookData.books.map((book) => (
        <Book key={book.isbn13} book={book} />
      ))}
    </div>
  );
};

export default Books;
