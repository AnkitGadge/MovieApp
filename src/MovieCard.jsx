import React from "react";

const MovieCard = ({
  key: index,
  movie: { imdbID, Year, Poster, Title, Type },
}) => {
  return (
    <div className="movie" key={imdbID}>
      <div>{index}</div>

      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        ></img>
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
