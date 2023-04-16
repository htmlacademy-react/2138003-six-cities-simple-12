import { sorting } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortOffers } from '../../store/action';
import { MouseEvent, useEffect, useState } from 'react';

const sortingValues = Object.values(sorting);

export default function SortingForm() {
  const [isOpenPopap, setOpenPopap] = useState(false);
  const select = useAppSelector((state) => state.select);
  const dispatch = useAppDispatch();

  const handleSortingChange = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpenPopap(!isOpenPopap);
  };

  useEffect(()=>{
    const documentClickHandler = () => {
      setOpenPopap(false);
    };
    if(isOpenPopap) {
      document.addEventListener('click', documentClickHandler );
    }
    return () => {
      document.removeEventListener('click', documentClickHandler);
    };
  },[isOpenPopap]);

  return (
    <form className="places__sorting" action="/#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingChange}>
        {select}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenPopap === true ? 'places__options--opened' : '' }`}>
        {sortingValues.map((value) => <li className={`places__option ${select === value ? 'places__option--active' : ''}`} key={value} onClick={() => {dispatch(setSortOffers(value)); setOpenPopap(!isOpenPopap);}} tabIndex={0}>{value}</li>)}
      </ul>
    </form>
  );
}
