import { Close } from 'theme-ui';
import { Alert } from '../components';

export function PrimaryAlert() {
  return (
    <Alert variant="primary">
      Beep boop, this is an alert!
      <Close ml="auto" mr={-2} />
    </Alert>
  );
}

export function SuccessAlert() {
  return (
    <Alert variant="success">
      Beep boop, this is a success alert!
      <Close ml="auto" mr={-2} />
    </Alert>
  );
}

export function NoticeAlert() {
  return (
    <Alert variant="notice">
      Beep boop, this is a notice alert!
      <Close ml="auto" mr={-2} />
    </Alert>
  );
}

export function WarningAlert() {
  return (
    <Alert variant="warning">
      Beep boop, this is a warning alert!
      <Close ml="auto" mr={-2} />
    </Alert>
  );
}
