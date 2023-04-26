import ReviewCard from '../review-card/review-card';
import { Comment } from '../../types/comment';

type Props = {
  reviews: Comment[];
}

export default function ReviewList({ reviews }: Props) {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, index) => <ReviewCard key={`${index + 1}-${review.user.avatarUrl}`} review={review}/>)}
      </ul>
    </>
  );
}
