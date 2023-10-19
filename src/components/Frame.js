import Property1blinking from "./Property1blinking";
import Property1filledIcon from "./Property1filledIcon";
import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.component4Parent}>
      <div className={styles.component4}>
        <Property1blinking
          frame6="/frame-6.svg"
          prop="Enter your question"
          propTop="20px"
          propHeight="75px"
          propTop1="6.67%"
          propBottom="18.67%"
          propLeft="272px"
          propWidth="50px"
          propHeight1="50px"
          propColor="rgba(0, 0, 0, 0.5)"
        />
        <Property1filledIcon
          property1filled="/property-1filling.svg"
          propTop="114px"
        />
        <Property1blinking frame6="/frame-61.svg" prop="|" />
        <Property1filledIcon property1filled="/property-1filled.svg" />
      </div>
    </div>
  );
};

export default Frame;
