import React from "react";
import styles from "./info_window.module.css";
import { RiCloseCircleFill } from "react-icons/ri";
import { AiOutlineArrowUp } from "react-icons/ai";

const InfoWindow = ({ setInfoWind }) => {
  const close_Window = () => {
    setInfoWind(false);
  };

  return (
    <div className={styles.infoWindow}>
      <div className={styles.info_cont}>
        <button className={styles.close_btn} onClick={close_Window}>
          <RiCloseCircleFill className={styles.close_icon} />
          <span className={styles.close_text}>닫기</span>
        </button>
        <div className={styles.info_header}>
          <div className={styles.info_menu_cont}>
            <span className={styles.info_menu_box}></span>
            <span className={styles.info_menu_des}>
              <AiOutlineArrowUp />
              <br />
              클릭 시 메뉴를 열고 닫을 수 있습니다
            </span>
          </div>
          <div className={styles.info_prev_cont}>
            <span className={styles.info_prev_box}></span>
            <span className={styles.info_prev_des}>
              <AiOutlineArrowUp />
              <br />
              클릭 시 이전 단계의 영상으로 이동할 수 있습니다
            </span>
          </div>
          <div className={styles.info_next_cont}>
            <span className={styles.info_next_box}></span>
            <span className={styles.info_next_des}>
              <AiOutlineArrowUp />
              <br />
              클릭 시 다음 단계의 영상으로 이동할 수 있습니다
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoWindow;
