function Premium (premium:boolean) {
  if (premium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  } else { return ''; }
}

export default Premium;
