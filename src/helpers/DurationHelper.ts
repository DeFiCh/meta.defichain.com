export default function secondsToTime(seconds: number): {
  y: number;
  m: number;
  d: number;
  h: number;
  min: number;
  s: number;
} {
  // declaring all time denomination in seconds
  const minInSec = 60; // 60 sec per min
  const hInSec = minInSec * 60; //  3600 sec per hr
  const dInSec = hInSec * 24; // 86400 sec per day
  const mInSec = dInSec * 30.4167; // 2628002.88 sec per day, considering 30.4167 avg days in a month
  const yInSec = mInSec * 12; // 31536034.56 sec per year
  let remainingTime = seconds;
  const y = Math.floor(remainingTime / yInSec);
  remainingTime -= y * yInSec;
  const m = Math.floor(remainingTime / mInSec);
  remainingTime -= m * mInSec;
  const d = Math.floor(remainingTime / dInSec);
  remainingTime -= d * dInSec;
  const h = Math.floor(remainingTime / hInSec);
  remainingTime -= h * hInSec;
  const min = Math.floor(remainingTime / minInSec);
  remainingTime -= min * minInSec;
  const s = Math.floor(remainingTime);
  return {
    y,
    m,
    d,
    h,
    min,
    s,
  };
}
