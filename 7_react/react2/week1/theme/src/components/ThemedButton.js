import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemedButton({ label, onClick }) {
  const theme = useContext(ThemeContext);
  const classes = `themed-btn ` + theme;
  return (
    <>
      <button className={classes} onClick={(x) => onClick()}>
        {label}
      </button>
    </>
  );
}
