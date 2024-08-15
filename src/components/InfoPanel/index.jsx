import { useRef } from "react";
import styles from "./infoPanel.module.css";

const InfoPanel = () => {
  const panelRef = useRef(null);
  const closePanel = () => {
    if (panelRef) {
      console.log(panelRef);
      panelRef.current.hidden = true;
    }
  };
  return (
    <div className={styles.container} ref={panelRef}>
      <button className={styles.closePanelBtn} onClick={closePanel}>
        x
      </button>
      Hi! This is my fist project using React.
      <br />
      It may not work very well,
      <br />
      but it performs the main functions as well as it can. 😎
    </div>
  );
};

export default InfoPanel;
