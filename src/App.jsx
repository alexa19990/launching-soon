import classes from "./modules/app.module.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import designIcon from "./assets/images/illustration-dashboard.png";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [outline, setOutline] = useState("");
  const [visibility, setVisibility] = useState(false)
  const clickHandler = () => {
    if (/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(value) !==true) {
      setOutline(classes.red);
      setVisibility(true)

    } else {
      console.log("please enter correct email");
    }
  };

  return (
    <div className={classes["app-center"]}>
      <div className={classes["container"]}>
        <h1 className={classes["title"]}>
          ping <span>.</span>
        </h1>
        <h1 className={classes["launching"]}>
          We are launching <span>soon!</span>
        </h1>
        <p className={classes["subscribe"]}>Subscribe and get notified</p>
        <div className={classes["input-div"]}>
          <input
            type="text"
            placeholder="Your email address..."
            className={outline}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setOutline("");
              setVisibility(false)
            }}
          />
          { visibility&& <p>Please provide a valid email address</p>}
          <button onClick={clickHandler}>Notify Me</button>
        </div>
        <img src={designIcon} alt="" />
        <div className={classes["icon-box"]}>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
        <p className={classes["copyright"]}>
          © Copyright ping. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default App;
