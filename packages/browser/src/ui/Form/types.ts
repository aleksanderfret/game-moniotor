export interface FormData {
  [key: string]:
    | null
    | Date
    | undefined
    | string
    | number
    | number[]
    | string[]
    | boolean
    | { [key: string]: number | string | boolean };
}
