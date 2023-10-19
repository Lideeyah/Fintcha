import { useMemo } from "react";
import styles from "./Property1filledState.module.css";

const Property1filledState = ({ propTop, propWidth }) => {
  const property1filledStateStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const emailAddress1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={styles.property1filledState}
      style={property1filledStateStyle}
    >
      <div className={styles.emailAddress} style={emailAddress1Style}>
        Email address
      </div>
      <div className={styles.property1filledStateChild} />
    </div>
  );
};

export default Property1filledState;
