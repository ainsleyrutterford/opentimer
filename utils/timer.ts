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

  firstTimestamp: number;

  currentTimestampIndex: number;

  animationFrame?: number;

  constructor(callback: Callback, timestamps: number[], tickCallback?: TickCallback) {
    this.callback = callback;
    this.tickCallback = tickCallback;
    this.timestamps = timestamps;
    this.totalElapsedTime = 0;
    this.raf = window.requestAnimationFrame;
    this.firstTimestamp = 0;
    this.currentTimestampIndex = 0;
  }

  start = () => {
    this.stop();

    // need to setup timestamps from now. if someone restarts timer we need to re setup timestamps.

    if (this.timestamps.length > 0) {
      this.firstTimestamp = performance.now();
      this.currentTimestampIndex = 0;
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
    this.totalElapsedTime = performance.now() - this.firstTimestamp;

    this.tickCallback?.(this.totalElapsedTime);

    if (this.totalElapsedTime >= (this.timestamps[this.currentTimestampIndex])) {
      this.callback();
      
      this.currentTimestampIndex += 1;
      if (this.currentTimestampIndex >= this.timestamps.length) {
        this.stop();
        return;
      }
    }

    this.animationFrame = this.raf?.call(window, this.tick);
  };
}
