import { useMemo } from "react";
import styles from "./Property1blinkingState.module.css";

const Property1blinkingState = ({
  emailAddress,
  prop,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propWidth1,
  propColor,
  showInputEmail,
  propAlignContent,
}) => {
  const property1blinkingStateStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
    };
  }, [propTop, propLeft, propWidth, propHeight]);

  const emailAddressStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const divStyle = useMemo(() => {
    return {
      color: propColor,
      alignContent: propAlignContent,
    };
  }, [propColor, propAlignContent]);

  return (
    <div
      className={styles.property1blinkingState}
      style={property1blinkingStateStyle}
    >
      <div className={styles.emailAddress} style={emailAddressStyle}>
        {emailAddress}
      </div>
      <div className={styles.wrapper}>
        {showInputEmail && (
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
        )}
      </div>
    </div>
  );
};

export default Property1blinkingState;
