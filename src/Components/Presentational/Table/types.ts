export interface Datum {
  Id: number;
  [property: string]: any;
}

export interface Column {
  name: string;
  property: string;
}
