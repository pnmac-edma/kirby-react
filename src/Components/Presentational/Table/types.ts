export interface Datum {
  Id: string;
  [property: string]: any;
}

export interface Column {
  name: string;
  property: string;
}
