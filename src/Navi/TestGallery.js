import React, { useState } from "react";
import "./Test.css";

const SlideAction = ({ btnClass = "", handleActive = () => {} }) => {
  return <div className={btnClass} onClick={handleActive}></div>;
};

const SlideItem = ({ active = false, id = "0" }) => {
  return (
    <div className={`mySlides ${active ? "active" : ""} `}>
      <img
        src={`https://picsum.photos/id/${id}/200`}
        alt="img"
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};

function TestGallery() {
  const listSlideItems = [1, 2, 3, 4, 5, 6];

  const [item, setItem] = useState(1);

  const handleActive = (id) => () => {
    console.log("run here");
    setItem(id);
  };

  return (
    <div className="container">
      {listSlideItems.map((index) => (
        <SlideItem key={index} active={item === index} id={index} />
      ))}
      <SlideAction btnClass="prev" handleActive={handleActive(item - 1)} />
      <SlideAction btnClass="next" handleActive={handleActive(item + 1)} />
    </div>
  );
}

export default TestGallery;
