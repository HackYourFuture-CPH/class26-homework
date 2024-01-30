import { useState } from "react";
import ThemeContainer from "./components/ThemeContainer";
import ThemedButton from "./components/ThemedButton";
import ThemedHeader from "./components/ThemedHeader";
import ThemedText from "./components/ThemedText";
import "./themes/lightTheme.css";
import "./themes/darkTheme.css";
import "./themes/hackerTheme.css";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div className={"page-container " + theme}>
          <div className="title-container">
            <h1 className={"title " + theme}>Welcome to React Masters</h1>
            <p className={"subtitle " + theme}>
              We are bringing you all the themes you need for your applications.
            </p>
          </div>

          <div className="themes-section">
            <ThemeContext.Provider value={"light"}>
              <ThemeContainer
                title="Light theme"
                buttonText="Use light theme"
                onButtonClick={(x) => setTheme("light")}
              >
                <img
                  src={process.env.PUBLIC_URL + "sun.svg"}
                  alt="light theme"
                />
                <ThemedText text="Light themes are great for readability. It's also great for people who prefer lighter colors." />
                <ol>
                  <li>This is the classic look</li>
                  <li>It's great for readability</li>
                  <li>It's great for people who prefer lighter colors</li>
                </ol>
              </ThemeContainer>
            </ThemeContext.Provider>

            <ThemeContext.Provider value={"dark"}>
              <ThemeContainer
                title="Dark theme"
                buttonText="Use Dark theme"
                onButtonClick={(x) => setTheme("dark")}
              >
                <img
                  width={50}
                  height={50}
                  src={process.env.PUBLIC_URL + "moon.png"}
                  alt="random"
                />
                <ThemedText text="Dark themes are great for low-dark environments. It's also great for people who prefer darker colors." />
              </ThemeContainer>
            </ThemeContext.Provider>

            <ThemeContext.Provider value={"hacker"}>
              <ThemeContainer
                title="Hacker theme"
                buttonText="Use Hacker Theme"
                onButtonClick={(x) => setTheme("hacker")}
              >
                <img
                  width={50}
                  height={50}
                  src={process.env.PUBLIC_URL + "script.png"}
                  alt="random"
                />
                <ThemedText text="Hackers gonna hack, hack, hack..." />
              </ThemeContainer>
            </ThemeContext.Provider>
          </div>

          <div className={"statement-container " + theme}>
            These are just a few of the themes we have. We have many more themes
            for you to choose from.
            <h3>Get started now</h3>
            <ThemedButton
              label="Sign Up"
              onClick={(x) => console.log("Signed up")}
            />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}
