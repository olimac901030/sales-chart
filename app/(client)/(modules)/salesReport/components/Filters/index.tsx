import { FormWrapper } from './FormWrapper';
import { Grid } from '@ui/index';
import { Select } from '@field/Select';

export function Filters() {
  return (
    <FormWrapper>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gap="1.5rem" position="relative" mt="2rem" justifyItems="center">
        <Select name="category" label="Categoría" options={[]} />
        <Select name="product" label="Producto" options={[]} />
        <Select name="brand" label="Marca" options={[]} />
      </Grid>
    </FormWrapper>
  );
}
