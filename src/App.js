// import React, { useState } from "react";
// import MovieList from "./Components/MovieList";
// import Filter from "./Components/Filter";

import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import MovieCard from "./Components/MovieCard";
import { Formik, Form, Field } from "formik";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "akakakakakanp",
      description: "A mind-bending heist movie.",
      posterURL: "c.jpg",
      rating: 4.8,
    },
    {
      title: "Panther",
      description: "A mind-bending heist movie.",
      posterURL: "Panther.jpg",
      rating: 6.7,
    },
    {
      title: "Flash",
      description: "A mind-bending heist movie.",
      posterURL: "flash.jpg",
      rating: 9.3,
    },
    // Add more movies as needed
  ]);

  const [filter, setFilter] = useState({ title: "", rating: "" });

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === "" || movie.rating >= parseFloat(filter.rating))
  );

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />

      {/* Formik Movie Form */}
      <Formik
        initialValues={{
          title: "",
          description: "",
          posterURL: "",
          rating: "",
        }}
        onSubmit={(values, { resetForm }) => {
          setMovies((prevMovies) => [
            ...prevMovies,
            {
              title: values.title,
              description: values.description,
              posterURL: values.posterURL,
              rating: parseFloat(values.rating) || 0,
            },
          ]);
          resetForm();
        }}
      >
        <Form>
          <h2>Add New Movie</h2>
          <label htmlFor="title">Title:</label>
          <Field type="text" id="title" name="title" required />

          <label htmlFor="description">Description:</label>
          <Field as="textarea" id="description" name="description" required />

          <label htmlFor="posterURL">Poster URL:</label>
          <Field type="text" id="posterURL" name="posterURL" required />

          <label htmlFor="rating">Rating:</label>
          <Field
            type="number"
            id="rating"
            name="rating"
            step="0.1"
            min="0"
            max="5"
            required
          />

          <button type="submit">Add Movie</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
