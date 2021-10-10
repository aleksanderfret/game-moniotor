import noop from 'utils/noop';

export const asyncResolved = async () => Promise.resolve();

export const asyncRejected = async () => Promise.reject();

export const caughtRejected = async () => {
  try {
    await asyncRejected();
  } catch {
    noop();
  }
};
