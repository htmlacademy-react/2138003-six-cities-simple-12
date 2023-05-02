import { ReviewStar } from '../../types/reviews-star';

type ReviewsRatingItemProps = {
  star: ReviewStar;
  setStars: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
}

export default function ReviewsRatingItem({star, setStars, onChange, disabled}: ReviewsRatingItemProps): JSX.Element {

  return (
    <>
      <input onChange={onChange}
        className="form__rating-input visually-hidden"
        name="rating"
        value={star.id}
        id={`${star.id}`}
        type="radio"
        disabled={disabled}
        checked={Number(setStars) === star.id}
      />
      <label
        htmlFor={`${star.id}`}
        className="reviews__rating-label form__rating-label"
        title={star.star}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
