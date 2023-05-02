import { useState, FormEvent } from 'react';
import { sendReviewAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { NewComment } from '../../types/new-comment';
import { CommentFormValue, starsRating } from '../../const';
import ReviewsRatingList from '../review-rating-list/review-rating-list';

type Props = {
  offerId: number;
}

export default function CommentForm({ offerId }: Props) {
  const dispatch = useAppDispatch();
  const isCommentDataLoading = useAppSelector((state) => state.isCommentDataLoading);

  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleChangeField: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (newComment: NewComment) => {
    dispatch(sendReviewAction(newComment));
  };

  const handleButtonOnClick = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.review !== null && formData.rating !== null) {
      onSubmit({
        comment: formData.review,
        rating: Number(formData.rating),
        id: offerId
      });
    }
    setFormData({rating: '', review: ''});
  };

  const isFormDisabled = () => {
    const isSetRating = Number(formData.rating) > CommentFormValue.Default;
    const isSetReview = formData.review.length > CommentFormValue.MinLength && formData.review.length < CommentFormValue.MaxLength;

    return isSetRating && isSetReview;
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleButtonOnClick}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewsRatingList star={starsRating} setStars={formData.rating} onChange={handleChangeField} disabled={isCommentDataLoading}/>
      <textarea onChange={handleTextareaChange} className="reviews__textarea form__textarea" id="review" value={formData.review} name="review" placeholder="Tell how was your stay, what you like and what can be improved" maxLength={300}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormDisabled()}>Submit</button>
      </div>
    </form>
  );}
