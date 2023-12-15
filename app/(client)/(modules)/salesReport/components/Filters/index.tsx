import { FormWrapper } from './FormWrapper';
import { Grid } from '@ui/index';
import { Categories } from './fields/Categories';
import { Brands } from './fields/Brands';
import { Products } from './fields/Products';

export function Filters() {
  return (
    <FormWrapper>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gap="1.5rem" position="relative" my="1.5rem" justifyItems="center">
        <Categories />
        <Products />
        <Brands />
      </Grid>
    </FormWrapper>
  );
}
