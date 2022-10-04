import { Fragment } from 'react';
import { buttons as buttonsTheme, ButtonVariant } from '../theme/buttons';
import { Button } from '../components';

export function ButtonPrimary() {
  return (
    <Fragment>
      {Object.keys(buttonsTheme).map((variant) => (
        <Button variant={variant as ButtonVariant}>{variant}</Button>
      ))}
    </Fragment>
  );
}
