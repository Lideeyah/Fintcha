import { useMemo } from "react";
import styles from "./Property1filledIcon.module.css";

const Property1filledIcon = ({ property1filled, propTop }) => {
  const property1filledIconStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <img
      className={styles.property1filledIcon}
      alt=""
      src={property1filled}
      style={property1filledIconStyle}
    />
  );
};

export default Property1filledIcon;
