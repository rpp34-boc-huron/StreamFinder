import React, {useEffect, useState} from 'react';

const Carousel = (props) => {
  const { ExpandedView, name, arrOfMoviesObj, favorites, watchList, setRandomNumber } = props;
  const [items, setItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [index, setIndex] = useState(1);
  const [balls, setBalls] = useState([1,1,1]);
  const [favoritesIds, setFavoritesIds] = useState([]);
  const [watchlistIds, setWatchListIds] = useState([]);

  const getMaxItemOnScreen = () => {
    let x = Math.floor(window.innerWidth/220);
    return x;
  }

  const onBallClick = (name, num) => {
    const balls = document.querySelectorAll(`.carousel-ball-${name}`)
    console.log('balls: ', balls);
    for (let i = 0; i < balls.length; i++) {
      console.log(balls[i].style)
      balls[i].style.background = 'lightgray';
    }
    document.querySelector(`.carousel-ball-${name}-${num}`).style.background = 'black'
    changeIndex(num + 1)
  }

  useEffect(() => {

    let maxItems = getMaxItemOnScreen();
    let balls = Math.ceil(items.length / maxItems);
    let ballsArr = [];
    for (let i = 0; i < balls; i++) ballsArr.push(1);
    setBalls(ballsArr);
    setIndex(1);
    setItems(arrOfMoviesObj || []);
    setFavoritesIds(favorites);
    setWatchListIds(watchList);
    setDisplayedItems(items.slice(0, maxItems));

  }, [arrOfMoviesObj, items, favorites, watchList]);

  const changeIndex = (num) => {
    setIndex(num);
  };

  useEffect(() => {
    let maxItems = getMaxItemOnScreen();
    if (index === 1) {
      setDisplayedItems(items.slice(0, maxItems));
    } else {
      setDisplayedItems(items.slice((index -1)*maxItems, index*maxItems));
    }
  }, [index]);

  if (arrOfMoviesObj.length === 0) {
    return (
      <></>
    );
  }

  return (
    <div className="carousel">
      <div className="carousel-name">{name}</div>
      <div className="carousel-rectangle">
        {displayedItems.map((item, i) => {
          return (
            <div key={`carousel-${name}-${i}`} className="carousel-item">
              <Display item={item} ExpandedView={ExpandedView} favoritesIds={favoritesIds} watchlistIds={watchlistIds} setRandomNumber={setRandomNumber}/>
            </div>
          );
        })}
      </div>

      <div className="carousel-next">
        {balls.map((ball, i) => {
          return <div key={`carousel-ball-${i}`} className={`carousel-ball carousel-ball-${i} carousel-ball-${name}-${i} carousel-ball-${name}`} onClick={() => onBallClick(name, i)}></div>
        })}
      </div>
    </div>
  );
};

const Display = ({ item, ExpandedView, favoritesIds, watchlistIds, setRandomNumber}) => {
  const [expanded, setExpanded] = useState(false);

  if (expanded) {
    return ExpandedView!==undefined? <ExpandedView movieId={item.id} set={setExpanded} favorited={favoritesIds ? favoritesIds.includes(item.id.toString()) : null} toBeWatched={watchlistIds ? watchlistIds.includes(item.id.toString()) : null} setRandomNumber={setRandomNumber}/> : <Empty set={setExpanded}/>;
  }
  return (
    <img src={item.image} alt="" width="100%" height="100%" onMouseEnter={() => setExpanded(true)}/>
  );
};

const EmptyDiv = (props) => {
  if (!props.render) return;
  const {set} = props;

  return (
    <div className="empty" onMouseLeave={() => set(false)}>
      EMPTY
    </div>
  );
};

export default Carousel;