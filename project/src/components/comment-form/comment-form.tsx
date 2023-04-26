import { useState, FormEvent } from 'react';
import { sendReviewAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { NewComment } from '../../types/new-comment';
import { CommentFormValue } from '../../const';

type Props = {
  offerId: number;
}

export default function CommentForm({ offerId }: Props) {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  const fieldChangeHandle: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (newComment: NewComment) => {
    dispatch(sendReviewAction(newComment));
  };

  const submitButtonOnClick = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.review !== null && formData.rating !== null) {
      onSubmit({
        comment: formData.review,
        rating: Number(formData.rating),
        id: offerId
      });
    }
    setFormData({rating: 0, review: ''});
  };

  const isFormDisabled = () => {
    const isSetRating = formData.rating > CommentFormValue.Default;
    const isSetReview = formData.review.length > CommentFormValue.MinLength && formData.review.length < CommentFormValue.MaxLength;

    return isSetRating && isSetReview;
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitButtonOnClick}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea onChange={handleTextareaChange} className="reviews__textarea form__textarea" id="review" value={formData.review} name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormDisabled()}>Submit</button>
      </div>
    </form>
  );}
