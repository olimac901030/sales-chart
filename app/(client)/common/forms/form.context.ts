import { createContext } from 'react';
import { formFactory } from './formFactory';

export const FormContext = createContext(formFactory({} as any));
