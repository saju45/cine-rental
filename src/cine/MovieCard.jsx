/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import tag from "../assets/tag.svg";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine-utilitils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(MovieContext);

  const { cardData } = state;
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCard = (event, movie) => {
    event.stopPropagation();
    const found = cardData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "addToCard",
        payload: {
          ...movie,
        },
      });
      toast.success(`Added  ${movie.title} to Cart !`);
    } else {
      toast.error(
        `the movie ${movie.title} has benn added to the card already`
      );
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCardAdd={handleAddToCard}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>

            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>

            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCard(e, movie)}
            >
              <img src={tag} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
