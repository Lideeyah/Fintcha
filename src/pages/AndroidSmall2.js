import { useCallback } from "react";
import Property1blinkingState from "../components/Property1blinkingState";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidSmall2.module.css";

const AndroidSmall2 = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/android-small-5");
  }, [navigate]);

  return (
    <div className={styles.androidSmall2}>
      <div className={styles.androidSmall2Child} />
      <div className={styles.androidSmall2Item} />
      <Property1blinkingState
        emailAddress="Email address"
        prop="Input email"
        propTop="219px"
        propLeft="calc(50% - 157px)"
        propWidth="313px"
        propHeight="109px"
        propWidth1="51.06%"
        propColor="rgba(0, 0, 0, 0.5)"
        showInputEmail
        propAlignContent="unset"
      />
      <Property1blinkingState
        emailAddress="Password"
        prop="Input password"
        propTop="318px"
        propLeft="calc(50% - 156px)"
        propWidth="313px"
        propHeight="109px"
        propWidth1="51.06%"
        propColor="rgba(0, 0, 0, 0.5)"
        showInputEmail
        propAlignContent="unset"
      />
      <div className={styles.frameParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} onClick={onRectangle2Click} />
        </div>
        <div className={styles.logIn}>Log In</div>
      </div>
      <div className={styles.logIn1}>Log In</div>
    </div>
  );
};

export default AndroidSmall2;
