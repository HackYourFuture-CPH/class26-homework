import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemedHeader({ title }) {
  const theme = useContext(ThemeContext);
  const classes = `themed-header ` + theme;
  return <h2 className={classes}>{title}</h2>;
}
