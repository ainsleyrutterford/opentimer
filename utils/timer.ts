type Callback = () => void;
type TickCallback = (totalElapsedTime?: number) => void;

/**
 * A timer that will call a provided callback function at the provided timestamps.
 * It can optionally also call a callback function at each tick of the timer.
 */
export class CountdownTimer {
  callback: Callback;

  tickCallback?: TickCallback;

  timestamps: number[];

  totalElapsedTime: number;

  raf: (callback: FrameRequestCallback) => number;

  lastTimestamp: number;

  animationFrame?: number;

  constructor(callback: Callback, timestamps: number[], tickCallback?: TickCallback) {
    this.callback = callback;
    this.tickCallback = tickCallback;
    this.timestamps = timestamps;
    this.totalElapsedTime = 0;
    this.raf = window.requestAnimationFrame;
    this.lastTimestamp = performance.now();
  }

  start = () => {
    this.stop();

    // need to setup timestamps from now. if someone restarts timer we need to re setup timestamps.

    if (this.timestamps.length > 0) {
      this.lastTimestamp = performance.now();
      this.raf?.call(window, this.tick);
    }
  };

  stop = () => {
    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame);
      delete this.animationFrame;
    }
    this.totalElapsedTime = 0;
  };

  tick = () => {
    const elapsedTime = performance.now() - this.lastTimestamp;
    this.totalElapsedTime += elapsedTime;

    if (this.tickCallback) this.tickCallback(this.totalElapsedTime);

    if (elapsedTime >= this.timestamps[0]) {
      this.callback();
      this.timestamps.pop(); // don't use pop, use an index instead as when we press stop we need to go back to the previous timestamp.

      if (this.timestamps.length > 0) {
        this.stop();
        return;
      }
      
      this.lastTimestamp = performance.now();
    }

    this.animationFrame = this.raf?.call(window, this.tick);
  };
}
