import raf from 'raf';
import * as actionTypes from './actionTypes';

const FPS = 60;
const frameDuration = 1000 / FPS;

let animationHandle;
let timeBegin;

const cancelFrame = () => {
  raf.cancel(animationHandle);
};

const now = typeof performance !== 'undefined' &&
  typeof performance.now === 'function'
  ? () => performance.now()
  : () => Date.now();

const scheduleFrame = cb => {
  timeBegin = now();
  animationHandle = raf(() => {
    const timeEnd = now();
    cb((timeEnd - timeBegin) / frameDuration);
  });
};

/*********************************************************/

let yProgress = 0;
export const advance = () => (dispatch, getState) => {
  cancelFrame();
  scheduleFrame(frames => {
    const DROP_FRAMES_ACCELERATED = 5;
    const dropAcceleration = 200;
    const dropFrames = 10;

    const framesPerDrop = dropAcceleration
      ? DROP_FRAMES_ACCELERATED
      : dropFrames;

    // console.log(frames);
    yProgress += frames / framesPerDrop;
    if (yProgress > 1) {
      dispatch({
        type: 'ADVANCE',
        payload: { rows: Math.floor(yProgress) }
      });
      yProgress %= 1;
    }

    dispatch(advance());
  });
};

export const move = (direction) => {
  return {
    type: actionTypes.MOVE,
    direction
  }
}
