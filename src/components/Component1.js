import Property1blinkingState from "./Property1blinkingState";
import Property1filledState from "./Property1filledState";
import styles from "./Component1.module.css";

const Component1 = () => {
  return (
    <div className={styles.component1}>
      <Property1blinkingState
        emailAddress="Email address"
        prop="Input email"
        propTop="20px"
        propLeft="20px"
        propWidth="235px"
        propHeight="97px"
        propWidth1="51.06%"
        propColor="rgba(0, 0, 0, 0.7)"
        showInputEmail
        propAlignContent="unset"
      />
      <Property1filledState propTop="137px" propWidth="unset" />
      <Property1blinkingState
        emailAddress="Email address"
        prop="|"
        showInputEmail
        propAlignContent="normal"
      />
      <Property1filledState />
    </div>
  );
};

export default Component1;
