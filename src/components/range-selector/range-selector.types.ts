import moment from 'moment';

export enum RangeTypes {
  month = 'month',
  week = 'week',
}

export interface Range {
  from: Date;
  to: Date;
}

export const Ranges = {
  month: {
    from: moment().subtract(1, 'month').toDate(),
    to: moment().toDate(),
  } as Range,
  week: {
    from: moment().subtract(1, 'week').toDate(),
    to: moment().toDate(),
  } as Range,
};
