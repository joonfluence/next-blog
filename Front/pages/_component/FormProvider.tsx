import { FormEvent, PropsWithChildren } from 'react';
import { FormProvider, UseFormMethods } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form``;

type Props<TValues> = {
  form: UseFormMethods<TValues>;
  onSubmit: (e: any) => void | Promise<void>;
};

function Component<TValues>({
  children,
  form,
  onSubmit,
}: PropsWithChildren<Props<TValues>>) {
  return (
    <FormProvider {...form}>
      <Form onSubmit={form.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
  );
}

export default Component;