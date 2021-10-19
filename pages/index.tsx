import type { NextPage } from "next";
import React from "react";

import { Navbar } from "../components/Navbar/navbar";
import TestHTML from "../components/test-html";
import githubStyles from "../styles/github.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className={githubStyles["markdown-body"]}>
        <TestHTML />
      </div>
    </>
  );
};

export default Home;
