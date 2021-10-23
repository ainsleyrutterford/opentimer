// Based off of https://github.com/Aaronik/accurate_timer

export class Timer {
  callback: () => void;

  interval: number;

  raf: ((callback: FrameRequestCallback) => number) | undefined;

  lastTimestamp: number;

  animationFrame?: number;

  constructor(callback: () => void, interval: number) {
    this.callback = callback;
    this.interval = interval;
    this.raf = window.requestAnimationFrame;
    this.lastTimestamp = performance.now();
  }

  start = () => {
    this.stop();

    this.lastTimestamp = performance.now();
    this.raf?.call(window, this.step);
  };

  stop = () => {
    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame);
      delete this.animationFrame;
    }
  };

  step = () => {
    const elapsedTime = performance.now() - this.lastTimestamp;

    if (elapsedTime >= this.interval) {
      this.lastTimestamp = this.lastTimestamp + this.interval;
      this.callback();
    }

    this.animationFrame = this.raf?.call(window, this.step);
  };
}
