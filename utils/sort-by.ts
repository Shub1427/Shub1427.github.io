export enum SortTypes {
  CREATED_AT,
}

export enum SortOrder {
  ASC,
  DESC,
}

export interface ISortParams {
  createdAt: Date;
}

export const sortBy = <T extends ISortParams>(
  data: T[],
  type: SortTypes,
  order: SortOrder = SortOrder.ASC
): T[] => {
  let sortedData: T[] = [];
  switch (type) {
    case SortTypes.CREATED_AT:
      sortedData = data
        .map(datum => datum)
        .sort((datum1: T, datum2: T) => {
          if (order === SortOrder.ASC) {
            return +datum1.createdAt - +datum2.createdAt;
          } else {
            return +datum2.createdAt - +datum1.createdAt;
          }
        });
  }
  return sortedData;
};
