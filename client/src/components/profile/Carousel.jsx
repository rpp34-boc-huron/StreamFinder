import React, {useEffect, useState} from 'react';

const Carousel = (props) => {
  // const ExpandedView = children;
  const { ExpandedView, name, arrOfMoviesObj } = props;
  const [items, setItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [index, setIndex] = useState(1);
  const [balls, setBalls] = useState([1,1,1]);

  const getMaxItemOnScreen = () => {
    let x = Math.floor(window.innerWidth/220);
    console.log(x);
    return x;
  }

  useEffect(() => {

    let maxItems = getMaxItemOnScreen();
    let balls = Math.ceil(items.length / maxItems);
    let ballsArr = [];
    for (let i = 0; i < balls; i++) ballsArr.push(1);
    setBalls(ballsArr);
    setIndex(1);
    setItems(arrOfMoviesObj);
    setDisplayedItems(items.slice(0, maxItems));

  }, [arrOfMoviesObj, items]);

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

  return (
    <div className="carousel">
      <div className="carousel-name">{name}</div>
      <div className="carousel-rectangle">
        {displayedItems.map((item, i) => {
          console.log('item: ', item);
          return (
            <div key={`carousel-${name}-${i}`} className="carousel-item">
              <Display item={item} ExpandedView={ExpandedView}/>
            </div>
          );
        })}
      </div>

      <div className="carousel-next">
        {balls.map((ball, i) => {
          return <div key={`carousel-ball-${i}`} className="carousel-ball" onClick={() => changeIndex(i + 1)}></div>
        })}
      </div>
    </div>
  );
};

const Display = ({ item, ExpandedView}) => {
  const [expanded, setExpanded] = useState(false);

  if (expanded) {
    return ExpandedView!==undefined? <ExpandedView movieId={item.id} set={setExpanded}/> : <Empty set={setExpanded}/>;
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