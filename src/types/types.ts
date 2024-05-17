export enum Versions {
 Stable = 'stable',
 A = 'a',
 B = 'b',
}

export type Store = {
  data: {
    key: Versions,
    value: string
  }[]
}

export type Testing = {
 random_x: number;
 random_y: number;
 versions: {
   [version in Versions]: number
 }
}
