import InfoPanel from "./components/InfoPanel";

export default function App() {
  return (
    <>
      <div className="info-panels-container">
        <InfoPanel
          imageUrl={
            "https://images.ctfassets.net/ljpkryr3szrz/6ukUbbNrYh7lucemUINfg1/5ae708bd24725bff65b823c4724ace74/frontpage_1.jpg"
          }
          title="Who we are"
        >
            HackYourFuture is a not-for-profit coding school for people with
            limited access to education and the labor market. The majority of
            our students worldwide are refugees.
        </InfoPanel>

        <InfoPanel
          imageUrl={
            "https://images.ctfassets.net/ljpkryr3szrz/3lNk9flnJXV9VBtCxTeB5c/7ffee160ffe05d43bff4cff636cccd2d/IMG_7644.jpg"
          }
          title="The program"
        >
          We believe in a world in which education and quality jobs are
          accessible for all. This is why we have designed a free 34 week
          program for newcomers in tech.
        </InfoPanel>

        <InfoPanel
          imageUrl={
            "https://images.ctfassets.net/ljpkryr3szrz/4b3zr1p3XSmpKTwbuydew9/68342c45a38da8e53b877361b723c43b/frontpage_2.jpg"
          }
          title={"Our goal"}
        >
          After the program we support our students in finding high quality
          jobs. Our success criteria is not graduation from the course but
          employment in the tech industry.
        </InfoPanel>
      </div>
    </>
  );
}
