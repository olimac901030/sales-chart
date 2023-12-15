import { FormWrapper } from './FormWrapper';
import { Grid } from '@ui/index';
import { Categories } from './fields/Categories';
import { Brands } from './fields/Brands';
import { Products } from './fields/Products';
import { SxProps } from '@mui/system';

const CONTAINER_SX = {
  '&': {
    p: '1rem',
    gridTemplateColumns: 'repeat(3, 1fr)',
    '@media(max-width:660px)': {
      gridTemplateColumns: '1fr'
    }
  }
} as SxProps;
export function Filters() {
  return (
    <FormWrapper>
      <Grid gridTemplateColumns="" gap="1.5rem" position="relative" my="1.5rem" justifyItems="center" sx={CONTAINER_SX}>
        <Categories />
        <Products />
        <Brands />
      </Grid>
    </FormWrapper>
  );
}
