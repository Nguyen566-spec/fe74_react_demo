import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../services/movieService";

const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState();
  console.log('Movie: ', movie)
  useEffect(() => {
    (async () => {
      try {
        const response = await movieService.getMovie(params.id);
        setMovie(response.data.content);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.id]);
  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-4">
          <img src={movie?.hinhAnh} className="img-fluid" alt="" />
        </div>
        <div className="col-8">
          <h1>{movie?.tenPhim}</h1>
          <p className="mt-3">{movie?.moTa}</p>
          <p className="mt-3">{movie?.ngayKhoiChieu}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
