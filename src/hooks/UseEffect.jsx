import React, { useEffect, useRef, useState } from "react";
import { movieService } from "../services/movieService";
import useQueryURL from "./UseQueryURL";
import { useNavigate, useSearchParams } from "react-router-dom";

const UseEffect = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useSearchParams("");
  const inputRef = useRef();
  const [query, setQuery] = useQueryURL();
  useEffect(() => {
    (async () => {
      try {
        let filter = "";
        if (search.get("tenPhim")) {
          filter += `&tenPhim=${search.get("tenPhim")}`;
        }
        const res = await movieService.getMovies(`?maNhom=GP13${filter}`);
        setMovies(res.data.content);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [search]);
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="m-4 text-center">Movie list</h1>
      <div className="d-flex mb-4">
        <input
          type="text"
          className="form-control"
          ref={inputRef}
          defaultValue={search.get("tenPhim")}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            const value = inputRef.current.value;
            if (value) {
              setSearch({
                tenPhim: value,
              });
            } else {
              setSearch({});
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="row g-4">
        {movies.map((movie) => (
          <div className="col-3" key={movie.maPhim}>
            <div className="card">
              <img
                src={movie.hinhAnh}
                className="card-img-top"
                alt={movie.tenPhim}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.tenPhim}</h5>
                <p className="card-text">{movie.moTa}</p>
                <button
                  className="btn btn-success w-100"
                  onClick={() => navigate(`/movie/${movie.maPhim}`)}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
