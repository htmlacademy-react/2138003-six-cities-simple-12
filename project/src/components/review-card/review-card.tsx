import { ratingScale } from '../const';
import { formatDate } from '../../utils';
import { Comment } from '../../types/comment';

type Props = {
  review: Comment;
}

export default function ReviewCard({review}: Props) {
  const { user: {avatarUrl, name}, rating, date, comment } = review;
  const dateTime = formatDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingScale(rating) }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateTime.fullDate}>{dateTime.yearMonth}</time>
      </div>
    </li>
  );
}
