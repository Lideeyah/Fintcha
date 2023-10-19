import { useMemo } from "react";
import styles from "./Property1blinking.module.css";

const Property1blinking = ({
  frame6,
  prop,
  propTop,
  propHeight,
  propTop1,
  propBottom,
  propLeft,
  propWidth,
  propHeight1,
  propColor,
}) => {
  const property1blinkingStyle = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  const rectangleDivStyle = useMemo(() => {
    return {
      top: propTop1,
      bottom: propBottom,
    };
  }, [propTop1, propBottom]);

  const frameIconStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
      height: propHeight1,
    };
  }, [propLeft, propWidth, propHeight1]);

  const div1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.property1blinking} style={property1blinkingStyle}>
      <div
        className={styles.property1blinkingChild}
        style={rectangleDivStyle}
      />
      <img
        className={styles.property1blinkingItem}
        alt=""
        src={frame6}
        style={frameIconStyle}
      />
      <div className={styles.div} style={div1Style}>
        {prop}
      </div>
    </div>
  );
};

export default Property1blinking;
