import { useState, useCallback } from "react";
import AndroidSmall7 from "../components/AndroidSmall7";
import PortalPopup from "../components/PortalPopup";
import Property1Frame17 from "../components/Property1Frame17";
import styles from "./AndroidSmall8.module.css";

const AndroidSmall8 = () => {
  const [isAndroidSmall7Open, setAndroidSmall7Open] = useState(false);

  const openAndroidSmall7 = useCallback(() => {
    setAndroidSmall7Open(true);
  }, []);

  const closeAndroidSmall7 = useCallback(() => {
    setAndroidSmall7Open(false);
  }, []);

  return (
    <>
      <div className={styles.androidSmall8}>
        <Property1Frame17
          imageDimensions="/insight-3@2x.png"
          imageIdentifier="/customer-ser-1-1@2x.png"
          imageDescription="/fraud-1@2x.png"
          featureImageUrl="Customer Support"
          propTop="-0.46%"
          propHeight="50.4%"
          propLeft="calc(50% - 180px)"
          propBottom="50.06%"
          propOverflow="hidden"
          propLeft1="calc(50% - 460px)"
          propRight="unset"
          propWidth="unset"
          propTop1="73px"
          propWidth1="300px"
          propHeight1="315.18px"
          propWidth2="310px"
          propHeight2="325px"
          propWidth3="300px"
          propHeight3="315.18px"
          propLeft2="calc(50% - 91px)"
        />
        <div className={styles.chat1Parent}>
          <img className={styles.chat1Icon} alt="" src="/chat-1@2x.png" />
          <img className={styles.phone1Icon} alt="" src="/phone-1@2x.png" />
          <img className={styles.email1Icon} alt="" src="/email-1@2x.png" />
        </div>
        <div className={styles.chat}>Chat</div>
        <div className={styles.phone}>Phone</div>
        <div className={styles.email}>Email</div>
        <div className={styles.haveQuestionsChatContainer}>
          <p className={styles.haveQuestionsChat}>Have questions? Chat with</p>
          <p className={styles.haveQuestionsChat}>
            <span>{`us on Whatsapp: `}</span>
            <span className={styles.span}>+234-917000811</span>
          </p>
        </div>
        <div className={styles.weRespondPromptly}>
          We respond promptly and timely to provide you with accurate and
          valuable information.
        </div>
        <div className={styles.toSpeakWithContainer}>
          <p className={styles.haveQuestionsChat}>
            To speak with our professionals
          </p>
          <p className={styles.haveQuestionsChat}>
            <span>{`all us on: `}</span>
            <span className={styles.span}>09015432345</span>
          </p>
        </div>
        <div className={styles.sendUsAnContainer}>
          <p
            className={styles.haveQuestionsChat}
          >{`Send us an email for any of the `}</p>
          <p className={styles.haveQuestionsChat}>{`services you need : `}</p>
          <p className={styles.haveQuestionsChat}>fintchat@gmail.com</p>
        </div>
        <img
          className={styles.menubuttonofthreelines797812Icon}
          alt=""
          src="/menubuttonofthreelines-79781-2@2x.png"
          onClick={openAndroidSmall7}
        />
        <img className={styles.androidSmall8Child} alt="" src="/line-6.svg" />
        <img className={styles.androidSmall8Item} alt="" src="/line-6.svg" />
        <img className={styles.androidSmall8Inner} alt="" src="/line-6.svg" />
        <img className={styles.lineIcon} alt="" src="/line-6.svg" />
        <img className={styles.androidSmall8Child1} alt="" src="/line-8.svg" />
        <img className={styles.androidSmall8Child2} alt="" src="/line-8.svg" />
        <img className={styles.c1Icon} alt="" src="/c-1@2x.png" />
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

export default AndroidSmall8;
