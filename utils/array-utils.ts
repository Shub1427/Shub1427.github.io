export const toArray = (record: Record<string, any> = {}) => {
  return Object.keys(record).reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(record, key)) {
      acc.push(record[key]);
    }
    return acc;
  }, [] as any[]);
};
