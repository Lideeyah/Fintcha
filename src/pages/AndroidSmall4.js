import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidSmall4.module.css";

const AndroidSmall4 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/android-small-5");
  }, [navigate]);

  return (
    <div className={styles.androidSmall4}>
      <div className={styles.androidSmall4Child} />
      <div className={styles.getStarted}>Get started</div>
      <div className={styles.welcomeToFintchat}>Welcome to FintChat</div>
      <div className={styles.askQuestions}>Ask questions</div>
      <div className={styles.gainInsight}>Gain Insight</div>
      <div className={styles.ethicalFramework}>Ethical framework</div>
      <div className={styles.customerSupport}>Customer Support</div>
      <div className={styles.fintchatProvidesYouContainer}>
        <p className={styles.fintchatProvidesYou}>
          FintChat provides you with answers
        </p>
        <p className={styles.fintchatProvidesYou}>
          through data for financial education
        </p>
        <p className={styles.fintchatProvidesYou}>
          and better decision making.
        </p>
      </div>
      <div className={styles.weProvideValuableContainer}>
        <p
          className={styles.fintchatProvidesYou}
        >{`We provide valuable insight on fraud detection and remedies to `}</p>
        <p className={styles.fintchatProvidesYou}>financial fraud.</p>
      </div>
      <div className={styles.fintchatProvidesYouContainer1}>
        <p className={styles.fintchatProvidesYou}>
          FintChat provides you with insight
        </p>
        <p className={styles.fintchatProvidesYou}>
          on how best to run your business
        </p>
        <p className={styles.fintchatProvidesYou}>
          and the right ethics to finance.
        </p>
      </div>
      <div className={styles.weHaveProfessionals}>
        We have professionals readily available to answer any further questions
        you may have so we can personalizeContinue your user experience.
      </div>
      <div className={styles.rectangleParent} onClick={onFrameContainerClick}>
        <div className={styles.frameChild} />
        <div className={styles.continue}>Continue</div>
      </div>
    </div>
  );
};

export default AndroidSmall4;
