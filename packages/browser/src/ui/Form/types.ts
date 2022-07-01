export interface FormData {
  [key: string]:
    | null
    | Date
    | string
    | number
    | number[]
    | string[]
    | boolean
    | { [key: string]: number | string | boolean };
}
