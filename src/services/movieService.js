import http from "../constant/api";

export const movieService = {
  getMovies: (query) => http.get(`QuanLyPhim/LayDanhSachPhim${query}`),

  getMovie: (id) => http.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`),
};
