import { Box, BoxProps } from 'theme-ui';
import { Text } from '../components';
import { TextProps } from './Text';

type ModalProps = BoxProps & {
  isOpen?: boolean;
};

type ModalBodyProps = BoxProps;

export default function Modal({ children, isOpen, ...props }: ModalProps) {
  return isOpen ? (
    <Box
      sx={{
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.4)'
      }}
      {...props}
    >
      <Box
        sx={{
          backgroundColor: '#fefefe',
          margin: '15% auto',
          padding: '2rem',
          border: '1px solid #888',
          width: '80%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Text
          sx={{
            color: '#aaa',
            alignSelf: 'flex-end',
            fontSize: '28px',
            fontWeight: 'bold',
            ['&:hover, &:focus']: {
              color: 'black',
              textDecoration: 'none',
              cursor: 'pointer'
            }
          }}
        >
          &times;
        </Text>
        {children}
      </Box>
    </Box>
  ) : null;
}

Modal.Header = function ({ children, ...restProps }: TextProps) {
  return (
    <Text variant="heading" sx={{ marginBottom: '2rem' }} {...restProps}>
      {children}
    </Text>
  );
};

Modal.Body = function ({ children, ...restProps }: ModalBodyProps) {
  return <Box {...restProps}>{children}</Box>;
};
