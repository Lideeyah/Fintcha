import { useState, useCallback } from "react";
import AndroidSmall7 from "../components/AndroidSmall7";
import PortalPopup from "../components/PortalPopup";
import Property1blinking from "../components/Property1blinking";
import styles from "./AndroidSmall5.module.css";

const AndroidSmall5 = () => {
  const [isAndroidSmall7Open, setAndroidSmall7Open] = useState(false);

  const openAndroidSmall7 = useCallback(() => {
    setAndroidSmall7Open(true);
  }, []);

  const closeAndroidSmall7 = useCallback(() => {
    setAndroidSmall7Open(false);
  }, []);

  return (
    <>
      <div className={styles.androidSmall5}>
        <div className={styles.androidSmall5Child} />
        <Property1blinking
          frame6="/frame-62.svg"
          prop="Enter your question"
          propTop="537px"
          propHeight="81px"
          propTop1="6.67%"
          propBottom="18.67%"
          propLeft="268px"
          propWidth="58px"
          propHeight1="58px"
          propColor="rgba(0, 0, 0, 0.5)"
        />
        <div className={styles.fintchat}>FintChat</div>
        <img
          className={styles.menubuttonofthreelines797811Icon}
          alt=""
          src="/menubuttonofthreelines-79781-2@2x.png"
          onClick={openAndroidSmall7}
        />
        <img className={styles.chatbot2Icon} alt="" src="/chatbot-2@2x.png" />
      </div>
      {isAndroidSmall7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAndroidSmall7}
        >
          <AndroidSmall7 onClose={closeAndroidSmall7} />
        </PortalPopup>
      )}
    </>
  );
};

export default AndroidSmall5;
