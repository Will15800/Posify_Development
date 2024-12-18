import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-8 text-lg text-left py-8">
      <h1 className="text-5xl font-bold text-center">
        Welcome to the Posify Web Interface
      </h1>
      <img
        src="pose-sample.png"
        alt="Posify animation"
        width="800px"
        className="mx-auto"
      />

      <p>
        This is Posify, a human pose estimator by Saad Manzur + Wayne Hayes.{" "}
        <b>
          Posify is <i>by far</i> the best human pose recognition algorithm,
          especially in cross-dataset comparisons.
        </b>
      </p>

      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-hover-link text-primary transition"
          href="https://link.springer.com/chapter/10.1007/978-3-031-73007-8_18"
        >
          The paper was published in ECCV 2024
        </a>
        , along with a 
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-hover-link text-primary transition"
          href="https://www.youtube.com/watch?v=TWHxz1dHeik"
        >
          video demo
        </a>
        .
      </p>

      <p>
        The most recent version of Posify will be soon available on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-hover-link text-primary transition"
          href="https://github.com/waynebhayes"
        >
          github
        </a>
        .
      </p>

      <div id="home-page-buttons" className="flex flex-row justify-center gap-4">
        <Link
          className="button radius bg-primary p-4 rounded-lg text-white hover:text-hover-link transition"
          to="#"
        >
          Submit New Job
        </Link>
        <Link
          className="button radius bg-primary p-4 rounded-lg text-white hover:text-hover-link transition"
          to="#"
        >
          Lookup Previous Job
        </Link>
      </div>

      <hr className="border w-full border-black transform scale-x-105" />

      <img
        width="400px"
        className="mx-auto"
        src="xkcd-machine-learning.png"
        alt="Pose cartoon"
      />
    </div>
  );
};

export default Home;