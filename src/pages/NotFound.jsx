// NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const NotFound = () => {
  const astronautSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  const textSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 400,
    config: { duration: 800 },
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-2xl mb-8">
          It seems like you've entered uncharted territory.
        </p>
        <animated.img
          src="https://i.imgur.com/Q2BAOd2.png"
          alt="Lost Astronaut"
          className="max-w-md mx-auto mb-8 sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
          style={astronautSpring}
        />
        <p className="text-lg mb-4">
          But don't worry, our astronaut is on a mission to find this page!
        </p>
        <Link to="/" className="text-xl underline">
          Go back to safety
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
