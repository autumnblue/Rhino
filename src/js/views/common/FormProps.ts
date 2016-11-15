interface FormProps {
    error: string;
    handleSubmit(fn: () => void): void
    submit(): void
    dispatch: Function;
}

export default FormProps;