import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/movieSlice";
import { RootState } from "../store";

export const Movies = () => {
  const dispatch = useDispatch();
  const { topMovies } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(movieActions.fetch());
  }, []);

  return (
    <main className="movies-wrapper">
      <section className="top-movies-actual">
        <h2 className="top-movies-actual__title">
          Top 10 movies in Poland today
        </h2>
        <div className="slider">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                initialSlide: 3,
              },
              800: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                initialSlide: 4,
              },
              1300: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                initialSlide: 5,
              },
            }}
            loop={true}
            navigation
            pagination={false}
            allowTouchMove={false}
            scrollbar={false}
          >
            {topMovies.length &&
              topMovies.map((movie: any, index) => {
                const { RankingNumber } = movie;
                return (
                  <SwiperSlide key={movie.id}>
                    <div className="top-movie">
                      <RankingNumber />
                      <div className="top-movie__details">
                        <img src={movie.poster} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
      <div className="attribution">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          alt="TMDB attribution"
        />
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </main>
  );
};
