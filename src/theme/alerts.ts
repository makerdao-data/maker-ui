import { ThemeUICSSObject } from 'theme-ui';

export type AlertVariant = 'primary' | 'success' | 'notice' | 'warning';

export type AlertTheme = Record<AlertVariant, ThemeUICSSObject>;

export const alerts: AlertTheme = {
  primary: {
    borderRadius: 'xs',
    border: '1px solid',
    borderColor: 'primary',
    bg: 'primary',
    color: 'onPrimary',
    width: '100%',
    justifyContent: ['flex-start', 'center']
  },
  success: {
    variant: 'alerts.primary',
    borderColor: 'success',
    bg: 'successAlt',
    color: 'onSuccess'
  },
  notice: {
    variant: 'alerts.primary',
    borderColor: 'notice',
    bg: 'noticeAlt',
    color: 'onNotice'
  },
  warning: {
    variant: 'alerts.primary',
    borderColor: 'warning',
    bg: 'warningAlt',
    color: 'onWarning'
  }
};
