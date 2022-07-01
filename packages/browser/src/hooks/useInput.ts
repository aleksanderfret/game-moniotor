// import {
//   ChangeEvent,
//   EventTarget,
//   FocusEvent,
//   useCallback,
//   useEffect,
//   useMemo,
//   useState,
// } from 'react';

// export type InputOnChangeHandler<T = HTMLInputElement | HTMLTextAreaElement> = (
//   event: ChangeEvent<T>
// ) => void;

// export type FocusHandler<T = HTMLInputElement | HTMLTextAreaElement> = (
//   event: FocusEvent<T>
// ) => void;

// export interface ValidatorOptions {
//   [key: string]: any;
// }

// type FieldValue = string | number;

// // type Validator = (value: any, options?: ValidatorOptions) => boolean;

// type FieldValidator = (value: any) => string;

// export interface InputFieldState {
//   error: boolean;
//   feedback: string;
//   onBlur: FocusHandler;
//   onChange: InputOnChangeHandler;
//   reset: () => void;
//   updated: boolean;
//   value: FieldValue;
// }

// export const useInput = <T>(
//   initValue: T,
//   submitted = false,
//   validators: FieldValidator[] = []
// ): InputFieldState => {
//   const [value, setValue] = useState(initValue);
//   const [feedback, setFeedback] = useState('');
//   const [touched, setTouched] = useState(false);

//   const sdf = (submitted || touched) && feedback;

//   const validate = useCallback(
//     (value: FieldValue) => {
//       if (!validators.length) {
//         return;
//       }
//       validators.some(validate => {
//         const result = validate(value);
//         setFeedback(result);

//         return Boolean(result);
//       });
//     },
//     [validators]
//   );

//   const onChange: InputOnChangeHandler = useCallback(
//     ({ target }) => {
//       const { value: inputValue } = target;
//       const newValue =
//         inputValue !== '' && typeof Number(inputValue) === 'number'
//           ? Number(inputValue)
//           : inputValue;

//       if (feedback) {
//         validate(newValue);
//       }

//       setValue(newValue);
//     },
//     [feedback, validate]
//   );

//   const onBlur: FocusHandler = useCallback(
//     ({ target }) => {
//       setTouched(true);
//       const { value: inputValue } = target;
//       const newValue =
//         inputValue !== '' && typeof Number(inputValue) === 'number'
//           ? Number(inputValue)
//           : inputValue;

//       if (newValue === initValue) {
//         return;
//       }

//       validate(target.value);
//     },
//     [initValue, validate]
//   );

//   const reset = useCallback(() => {
//     setFeedback('');
//   }, []);

//   useEffect(() => {
//     if (submitted) {
//     }
//   }, [submitted]);

//   useEffect(() => {
//     setValue(initValue);
//   }, [initValue]);

//   return useMemo(
//     () => ({
//       value,
//       touched,
//       updated: initValue !== value,
//       feedback,
//       error: Boolean(feedback),
//       onChange,
//       onBlur,
//       reset,
//     }),
//     [value, initValue, feedback, onChange, onBlur, reset, touched]
//   );
// };
