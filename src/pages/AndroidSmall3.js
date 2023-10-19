import { useCallback } from "react";
import Property1blinkingState from "../components/Property1blinkingState";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidSmall3.module.css";

const AndroidSmall3 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/android-small-4");
  }, [navigate]);

  const onALREADYHAVEANClick = useCallback(() => {
    navigate("/android-small-2");
  }, [navigate]);

  return (
    <div className={styles.androidSmall3}>
      <div className={styles.androidSmall3Child} />
      <Property1blinkingState
        emailAddress="Email address"
        prop="Input email"
        propTop="262px"
        propLeft="calc(50% - 156px)"
        propWidth="313px"
        propHeight="109px"
        propWidth1="51.06%"
        propColor="rgba(0, 0, 0, 0.5)"
        showInputEmail
        propAlignContent="unset"
      />
      <Property1blinkingState
        emailAddress="Username"
        prop="Input desired username"
        propTop="162px"
        propLeft="calc(50% - 156px)"
        propWidth="313px"
        propHeight="109px"
        propWidth1="51.06%"
        propColor="rgba(0, 0, 0, 0.5)"
        showInputEmail
        propAlignContent="unset"
      />
      <Property1blinkingState
        emailAddress="Create password"
        prop="Input new password"
        propTop="363px"
        propLeft="calc(50% - 156px)"
        propWidth="313px"
        propHeight="109px"
        propWidth1="51.06%"
        propColor="rgba(0, 0, 0, 0.5)"
        showInputEmail
        propAlignContent="unset"
      />
      <div className={styles.rectangleParent} onClick={onFrameContainerClick}>
        <div className={styles.frameChild} />
        <div className={styles.signUp}>Sign up</div>
      </div>
      <div className={styles.signUp1}>Sign Up</div>
      <div className={styles.alreadyHaveAn} onClick={onALREADYHAVEANClick}>
        ALREADY HAVE AN ACCOUNT? LOG IN
      </div>
    </div>
  );
};

export default AndroidSmall3;
