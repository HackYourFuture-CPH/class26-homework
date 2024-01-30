import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemedText({ text }) {
  const theme = useContext(ThemeContext);
  const classes = `themed-text ` + theme;
  return <p className={classes}>{text}</p>;
}
