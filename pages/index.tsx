import type { NextPage } from "next";
import React, { useEffect, useState } from "react";

import { DarkmodeToggle } from "../components/darkmode";

const GBA_FPS = 59.7275;
const GBA_FRAMERATE = 1000 / GBA_FPS;

// const NDS_GBA_FPS = 59.6555;
// const NDS_GBA_FRAMERATE = 1000 / NDS_GBA_FPS;

type LabelledNumberInputProps = {
  label: string;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

const LabelledNumberInput = ({
  label,
  state,
  setState,
}: LabelledNumberInputProps) => {
  return (
    <div>
      <label>{label} </label>
      <input
        value={state}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onInput={(event) => {
          const int = parseInt(event.currentTarget.value);
          if (Number.isInteger(int)) {
            setState(parseInt(event.currentTarget.value));
          } else {
            setState(0);
          }
        }}
      />
    </div>
  );
};

const Home: NextPage = () => {
  const [lag, setLag] = useState(0);
  const [preTimer, setPreTimer] = useState(5000);
  const [targetFrame, setTargetFrame] = useState(1000);
  const [frameHit, setFrameHit] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(targetFrame * GBA_FRAMERATE + lag);
  }, [targetFrame, lag]);

  return (
    <>
      <DarkmodeToggle />
      <br />
      Time (s): {`${(time / 1000).toFixed(2)}`} <br />
      <br />
      <LabelledNumberInput label="Lag (ms)" state={lag} setState={setLag} />
      <LabelledNumberInput
        label="Pre-timer (ms)"
        state={preTimer}
        setState={setPreTimer}
      />
      <LabelledNumberInput
        label="Target frame"
        state={targetFrame}
        setState={setTargetFrame}
      />
      <br />
      <LabelledNumberInput
        label="Frame hit"
        state={frameHit}
        setState={setFrameHit}
      />
      <br />
      <button
        onClick={() => {
          if (frameHit !== 0) {
            setLag(Math.round((targetFrame - frameHit) * GBA_FRAMERATE));
          }
        }}
      >
        Update
      </button>
      <button onClick={() => setTime(targetFrame * GBA_FRAMERATE + lag)}>
        Start
      </button>
    </>
  );
};

export default Home;
