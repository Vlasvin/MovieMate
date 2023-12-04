import { useParams } from "react-router-dom";
import { ReviewAuthor, ReviewItem, ReviewList, ReviewText } from "./Reviews.styled";
import { useEffect, useState } from "react";
import { fetchReview } from "Services/api";

const Reviews = () => {
const { movieId } = useParams();
const [movieCast, setMovieCast] = useState([]);

useEffect(() => {
  if (movieId) {
    fetchReview (movieId).then(movies => {
      if (movies.cast.length > 0) {
        setMovieCast(movies.cast);
      }
    });
  }
}, [movieId]);


    return (
        <div>
            <ReviewList>
                <ReviewItem>
                    <ReviewAuthor>Author:</ReviewAuthor>
                    <ReviewText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro sapiente unde quidem maxime, illo nisi esse animi dolore saepe reprehenderit, inventore rerum corrupti? Quia facere accusamus necessitatibus quasi eius?</ReviewText>
                </ReviewItem>
            </ReviewList>
        </div>
    )
}

export default Reviews;