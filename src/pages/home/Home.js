import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { LinkButton } from "../../components/link_button/LinkButton";
export const Home = () => {
  return (
    <div className={classes.home}>
      <ul className={classes.wrapper}>
        <li>
          <h1 className={classes.firstHeaderMessage}>tempor incididunt</h1>
        </li>

        <li>
          <p className={classes.secondHeaderMessage}>eiusmod tempo</p>
        </li>
        <li>
          <LinkButton toText="" buttonText="View More" />
        </li>
      </ul>
    </div>
  );
};
