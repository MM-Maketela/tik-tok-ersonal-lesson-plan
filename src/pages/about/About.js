import React from "react";
import classes from "./About.module.css";
import doc from "../../assets/doc.jpg";
import { TextHeader } from "../../components/text_header/TextHeader";
export const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.imageWrapper}>
      <img src={doc} className={classes.image} />
      </div>
      

      <div className={classes.textWrapper}>
        <TextHeader header="About Doc" size="2.5rem" />
        <p className={classes.textInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/> <br/>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/> <br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
};
