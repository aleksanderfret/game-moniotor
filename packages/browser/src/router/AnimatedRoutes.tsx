import React, { FC } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import { animated, easings, useTransition } from 'react-spring';

const AnimatedRoutes: FC = ({ children }) => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: 'translate3d(100%,0,0)',
      position: 'absolute',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
      position: 'relative',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%,0,0)',
      position: 'absolute',
    },
    config: { duration: 750, easing: easings.easeInOutBack },
  } as const);

  return transitions((props, item) => (
    <animated.div style={props}>
      <Routes location={item}>{children}</Routes>
    </animated.div>
  ));
};

export default AnimatedRoutes;
