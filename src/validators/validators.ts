export const requiredField = (value: string) => (value ? undefined : 'Required Field')

export const email = (value: string) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

export const minLengthVC = (length: number) => (value: string) => value && value.length >= length ? undefined : `Min length is equal${length}`