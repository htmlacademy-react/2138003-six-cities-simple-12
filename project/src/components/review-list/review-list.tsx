import ReviewCard from '../review-card/review-card';
import { reviews } from '../../mock/reviews';
import CommentForm from '../comment-form/comment-form';

export default function ReviewList() {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => <ReviewCard key={item.id} review={item}/>)}
      </ul>
      <CommentForm />
    </>
  );
}
