/* eslint-disable @typescript-eslint/no-unused-vars */
import { Howl } from "howler";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";

import { DarkmodeToggle } from "../components/darkmode";
import { CountdownTimer } from "../utils/timer";

const GBA_FPS = 59.7275;
const GBA_FRAMERATE = 1000 / GBA_FPS;

// const NDS_GBA_FPS = 59.6555;
// const NDS_GBA_FRAMERATE = 1000 / NDS_GBA_FPS;

const calculateTimestamps = (
  time: number,
  beeps: number,
  beepDistance: number
) => {
  const timestamps = [time];

  for (let i = 0; i < beeps - 1; i++) {
    timestamps.push(timestamps[i] - beepDistance);
  }

  return timestamps.reverse().filter((timestamp) => timestamp >= 0);
};

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
  // Input field states
  const [lag, setLag] = useState(0);
  const [preTimerInput, setPreTimerInput] = useState(5000);
  const [targetFrame, setTargetFrame] = useState(1000);
  const [frameHit, setFrameHit] = useState(0);

  // Pre timer states
  const [preTimeElapsed, setPreTimeElapsed] = useState(0);
  const [preTimer, setPreTimer] = useState<CountdownTimer>();
  const [preTimerStarted, setPreTimerStarted] = useState(false);

  // Countdown timer states
  const [time, setTime] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timer, setTimer] = useState<CountdownTimer>();
  const [timerStarted, setTimerStarted] = useState(false);

  // Beep states
  const [beeps, setBeeps] = useState(5);
  const [beepDistance, setBeepDistance] = useState(500);

  // Create countdown timer
  useEffect(() => {
    const audio = new Howl({ src: ["beep.wav"] });

    const countdownTimer = new CountdownTimer(
      () => audio.play(),
      (elapsedTime) => setTimeElapsed(elapsedTime),
      () => {
        setTimerStarted(false);
        setTimeElapsed(time);
      }
    );

    setTimer(countdownTimer);
  }, []);

  // Create pre-time timer
  useEffect(() => {
    const audio = new Howl({ src: ["beep.wav"] });

    const preTimerObject = new CountdownTimer(
      () => audio.play(),
      (elapsedTime) => setPreTimeElapsed(elapsedTime),
      () => {
        setPreTimerStarted(false);
        setPreTimeElapsed(0);
        timer?.start();
        setTimerStarted(true);
      }
    );

    setPreTimer(preTimerObject);
  }, [timer]);

  // Set timer beeps
  useEffect(() => {
    const timestamps = calculateTimestamps(time, beeps, beepDistance);
    timer?.setTimestamps(timestamps);
  }, [time, timer, beeps, beepDistance]);

  // Set pre-timer beeps
  useEffect(() => {
    const timestamps = calculateTimestamps(preTimerInput, beeps, beepDistance);
    preTimer?.setTimestamps(timestamps);
  }, [preTimerInput, preTimer, beeps, beepDistance]);

  // Update the time if target frame or lag are updated
  useEffect(() => {
    setTime(Math.max(0, targetFrame * GBA_FRAMERATE + lag));
  }, [lag, targetFrame]);

  // Stop both timers if any of the inputs are updated
  useEffect(() => {
    timer?.stop();
    setTimerStarted(false);

    setPreTimeElapsed(0);
    preTimer?.stop(() => {
      setPreTimerStarted(false);
      setPreTimeElapsed(0);
    });
    setPreTimerStarted(false);
  }, [lag, preTimerInput, targetFrame, frameHit]);

  return (
    <>
      <DarkmodeToggle />
      <br />
      <br />
      Pre Timer (s): {`${((preTimerInput - preTimeElapsed) / 1000).toFixed(
        2
      )}`}{" "}
      <br />
      Time (s): {`${((time - timeElapsed) / 1000).toFixed(2)}`} <br />
      <br />
      <LabelledNumberInput label="Lag (ms)" state={lag} setState={setLag} />
      <LabelledNumberInput
        label="Pre-timer (ms)"
        state={preTimerInput}
        setState={setPreTimerInput}
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
      {timerStarted || preTimerStarted ? (
        <button
          onClick={() => {
            preTimer?.stop(() => {
              setPreTimerStarted(false);
              setPreTimeElapsed(0);
            });
            setPreTimerStarted(false);
            timer?.stop();
            setTimerStarted(false);
          }}
        >
          Stop
        </button>
      ) : (
        <button
          onClick={() => {
            preTimer?.start();
            setPreTimerStarted(true);
          }}
        >
          Start
        </button>
      )}
    </>
  );
};

export default Home;
