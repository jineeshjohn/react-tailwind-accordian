import React, { useEffect, useState, useRef } from 'react';

import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const AccordionHeading = styled.div`
  cursor: pointer;
  display: flex;
  line-height: 2rem;
  padding: 10px;
`;

const AccordionItem = ({ content }) => {
  const [open, setOpen] = useState(false);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const calcContentMaxHeight = () => {
      ref && setContentMaxHeight(ref.current.scrollHeight);
    };

    calcContentMaxHeight();

    window.addEventListener('resize', () => calcContentMaxHeight());

    return () => window.removeEventListener('resize', calcContentMaxHeight());
  }, [ref, contentMaxHeight]);

  const { scY, y, ...props } = useSpring({
    scY: open ? -1 : 1,
    // y: open ? 0 : -contentMaxHeight,
    opacity: open ? 1 : 0,
    maxHeight: open ? `${contentMaxHeight}px` : '0px',
    config: { duration: 300 },
  });

  return (
    <div>
      <AccordionHeading onClick={() => setOpen(!open)}>
        <div>{content.title}</div>
        <animated.div
          style={{
            padding: '5px',
            transform: scY.interpolate((scY) => `scaleY(${scY})`),
          }}
          height="16px"
          pl={2}
        >
          ˇ
        </animated.div>
      </AccordionHeading>
      <animated.div
        ref={ref}
        style={{
          overflow: 'hidden',
          ...props,
        }}
      >
        <div pb={1}>{content.text}</div>
      </animated.div>
    </div>
  );
};

export default AccordionItem;
