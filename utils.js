export function sum(a, b) {
  return a + b;
}

export function average(a, b) {
  return sum(a, b) / 2;
}

export const MAX = 1000;

export default function max(a, b) {
  return a > b ? a : b;
}

export function measure(a) {
  return a.filter(n => n >= 10);
}

export function add(a) {
  return a.map((n => n + 10));
}


export function notequal(a, b) {
  let ar;
  for (let d = 0; d < b.length; d++) {
    ar.push(a.filter(n => n !== b[d]));
  }
  return ar;
}

export function dbl(a) {
  return a.filter(n => n > 20).map(e => e * 2);
}
export function min(a, b) {
  return a > b ? a : b;
}
