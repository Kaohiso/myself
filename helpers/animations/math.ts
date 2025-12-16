const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);

const range = (t: number, start: number, end: number) =>
  clamp((t - start) / (end - start));

export { clamp, range };
