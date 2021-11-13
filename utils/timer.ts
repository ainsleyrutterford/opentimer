type Callback = () => void;
type TickCallback = (totalElapsedTime: number) => void;

/**
 * A timer that will call a provided callback function at the provided timestamps.
 * It can optionally also call a callback function at each tick of the timer.
 */
export class CountdownTimer {
  callback: Callback;

  tickCallback?: TickCallback;

  stopCallback?: Callback;

  timestamps: number[];

  totalElapsedTime: number;

  raf: (callback: FrameRequestCallback) => number;

  startTimestamp: number;

  currentTimestampIndex: number;

  animationFrame?: number;

  constructor(
    callback: Callback,
    tickCallback?: TickCallback,
    stopCallback?: Callback,
    timestamps?: number[]
  ) {
    this.callback = callback;
    this.tickCallback = tickCallback;
    this.stopCallback = stopCallback;
    this.timestamps = timestamps || [];
    this.totalElapsedTime = 0;
    this.raf = window.requestAnimationFrame;
    this.startTimestamp = 0;
    this.currentTimestampIndex = 0;
  }

  setTimestamps = (timestamps: number[]) => {
    this.timestamps = timestamps;
  };

  start = () => {
    this.stop();

    if (this.timestamps.length > 0) {
      this.startTimestamp = performance.now();
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
    this.stopCallback?.();
  };

  tick = () => {
    this.totalElapsedTime = performance.now() - this.startTimestamp;

    this.tickCallback?.(this.totalElapsedTime);

    if (this.totalElapsedTime >= this.timestamps[this.currentTimestampIndex]) {
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
