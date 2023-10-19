import { useMemo } from "react";
import styles from "./Property1Frame17.module.css";

const Property1Frame17 = ({
  imageDimensions,
  imageIdentifier,
  imageDescription,
  featureImageUrl,
  propTop,
  propHeight,
  propLeft,
  propBottom,
  propOverflow,
  propLeft1,
  propRight,
  propWidth,
  propTop1,
  propWidth1,
  propHeight1,
  propWidth2,
  propHeight2,
  propWidth3,
  propHeight3,
  propLeft2,
}) => {
  const property1Frame17Style = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
      left: propLeft,
      bottom: propBottom,
      overflow: propOverflow,
    };
  }, [propTop, propHeight, propLeft, propBottom, propOverflow]);

  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft1,
      right: propRight,
      width: propWidth,
      top: propTop1,
    };
  }, [propLeft1, propRight, propWidth, propTop1]);

  const insight3IconStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight1,
    };
  }, [propWidth1, propHeight1]);

  const customerSer11Style = useMemo(() => {
    return {
      width: propWidth2,
      height: propHeight2,
    };
  }, [propWidth2, propHeight2]);

  const fraud1IconStyle = useMemo(() => {
    return {
      width: propWidth3,
      height: propHeight3,
    };
  }, [propWidth3, propHeight3]);

  const gainFinancialInsightStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div className={styles.property1frame17} style={property1Frame17Style}>
      <div className={styles.insight3Parent} style={frameDivStyle}>
        <img
          className={styles.insight3Icon}
          alt=""
          src={imageDimensions}
          style={insight3IconStyle}
        />
        <img
          className={styles.customerSer11}
          alt=""
          src={imageIdentifier}
          style={customerSer11Style}
        />
        <img
          className={styles.fraud1Icon}
          alt=""
          src={imageDescription}
          style={fraud1IconStyle}
        />
      </div>
      <div
        className={styles.gainFinancialInsight}
        style={gainFinancialInsightStyle}
      >
        {featureImageUrl}
      </div>
    </div>
  );
};

export default Property1Frame17;
