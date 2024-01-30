import { useContext } from "react";
import ThemedButton from "./ThemedButton";
import ThemedHeader from "./ThemedHeader";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeContainer(props) {
  const theme = useContext(ThemeContext);
  return (
    <div className={"theme-container " + theme}>
      <ThemedHeader title={props.title} />
      {props.children}
      <ThemedButton
        label={props.buttonText}
        onClick={(x) => props.onButtonClick()}
      />
    </div>
  );
}
