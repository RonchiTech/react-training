import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const list = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '' ;
    return (
      <Fragment key={index}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });
  return <div className="ui styled accordion">{list}</div>;
};
export default Accordion;
