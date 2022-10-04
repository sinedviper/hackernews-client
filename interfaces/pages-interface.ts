export interface Data {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string;
  kids?: number[];
  text?: string;
  dead?: boolean;
}

export interface User {
  created: number;
  id: string;
  karma: number;
  submitted?: number[];
  about?: string;
}

export interface Comments {
  time: number;
  text: string;
  id: number;
  by: string;
  type: string;
  parent: number;
  kids?: Comments[];
  deleted?: boolean;
}
