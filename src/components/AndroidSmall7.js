import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidSmall7.module.css";

const AndroidSmall7 = () => {
  const navigate = useNavigate();

  const onLogOutTextClick = useCallback(() => {
    navigate("/android-small-1");
  }, [navigate]);

  const onCustomerSupportTextClick = useCallback(() => {
    navigate("/android-small-8");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/android-small-5");
  }, [navigate]);

  return (
    <div className={styles.androidSmall7}>
      <img className={styles.androidSmall7Child} alt="" src="/line-3.svg" />
      <img className={styles.androidSmall7Item} alt="" src="/line-61.svg" />
      <img className={styles.androidSmall7Inner} alt="" src="/line-3.svg" />
      <img className={styles.lineIcon} alt="" src="/line-7.svg" />
      <img className={styles.androidSmall7Child1} alt="" src="/line-3.svg" />
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.logOut} onClick={onLogOutTextClick}>
        Log Out
      </div>
      <div
        className={styles.customerSupport}
        onClick={onCustomerSupportTextClick}
      >
        <p className={styles.customer}>Customer</p>
        <p className={styles.customer}>support</p>
      </div>
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
    </div>
  );
};

export default AndroidSmall7;
