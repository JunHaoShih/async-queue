/* eslint-disable no-console */
import { asyncQueue } from './asyncQueue';

async function waitFor(second: number) {
  return new Promise<number>((resolve) => {
    console.log(`Start waiting for ${second} seconds`);
    setTimeout(() => {
      console.log(`Successfully waited ${second} seconds`);
      resolve(second);
    }, 1000 * second);
  });
}

const promises = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => () => waitFor(i));
asyncQueue<number>(promises, 3)
  .then(() => {
    console.log('Yeah');
  });
