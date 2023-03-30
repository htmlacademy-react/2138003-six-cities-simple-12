export default function Premium (premium:boolean) {
  if (premium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
  return '';
}
