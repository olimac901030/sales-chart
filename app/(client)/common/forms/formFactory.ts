import { FieldState, FormState, StatesObject } from 'formstate-x';

export type FieldStateType<VALUE_TYPE> = FieldState<VALUE_TYPE> & { id: string };

export type FormType<T> = { [KEY in keyof T]: FieldStateType<T[KEY]> } & {
  $: FormState<StatesObject> & { values: T; id: string };
};

export type FormInputType<T> = {
  [KEY in keyof T]: T[KEY];
};
let formNum = 0;
export function formFactory<BASE_TYPE extends object>(data: FormInputType<BASE_TYPE>): FormType<BASE_TYPE> {
  const states = Object.create(null);
  Object.entries(data).forEach(([key, value]) => {
    const newState = new FieldState(value);
    Object.defineProperty(newState, 'id', {
      get(): string {
        return `fs-field-${key}-${Number(new Date())}`;
      }
    });
    states[key] = newState;
  });
  states['$'] = new FormState<any>(states);
  states['$'].id = `form${++formNum}-${Number(new Date())}`;
  Object.defineProperty(states['$'], 'values', {
    get(): BASE_TYPE {
      return { ...states['$'].value } as BASE_TYPE;
    }
  });
  return states;
}
