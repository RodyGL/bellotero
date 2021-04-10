import { Status } from './global-types';

export function isStatusIn(status: Status, statusList: Status[]) {
  return statusList.includes(status);
}

export function isNumber(value: unknown): value is number {
  return !Number.isNaN(Number(value));
}
