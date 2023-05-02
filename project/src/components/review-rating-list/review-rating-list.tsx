import { ReviewStar } from '../../types/reviews-star';
import ReviewsRatingItem from '../review-rating-item/review-rating-item';

type Props = {
  star: ReviewStar[];
  setStars: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
}

export default function ReviewsRatingList({star, setStars, onChange, disabled}: Props) {
  return (
    <div className="reviews__rating-form form__rating">
      {star.map((index) => (
        <ReviewsRatingItem key={index.id} star={index} onChange={onChange} disabled={disabled} setStars={setStars}/>
      ))}
    </div>
  );
}
