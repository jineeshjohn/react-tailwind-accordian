import React, { useEffect, useState, useRef } from 'react';

import { useSpring, animated } from 'react-spring';

const AccordionItem = ({
  header,
  children,
  rounderCornerClass = '',
  isOpen = false,
}) => {
  const [open, setOpen] = useState(isOpen);
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
    maxHeight: open ? `${contentMaxHeight}px` : '0px',
    config: { duration: 300 },
  });

  return (
    <div>
      <h2 id="accordion-collapse-heading-1" onClick={() => setOpen(!open)}>
        <button
          type="button"
          className={`flex ${rounderCornerClass} items-center justify-between w-full p-3 font-medium text-left  border border-b-0 border-gray-200   focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-800`}
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <span>{header}</span>
          <animated.span
            style={{
              padding: '5px',
              transform: scY.interpolate((scY) => `scaleY(${scY})`),
            }}
            height="16px"
            pl={2}
          >
            <svg
              data-accordion-icon
              className="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </animated.span>
        </button>
      </h2>

      <animated.div
        ref={ref}
        style={{
          overflow: 'hidden',
          ...props,
        }}
      >
        {children}
      </animated.div>
    </div>
  );
};

export default AccordionItem;
