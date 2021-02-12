import React from 'react';

import {
  Badge,
  Box,
  Button,
  IconButton,
  List,
  makeStyles,
  Popover,
  Tooltip,
  Typography,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useTranslation } from 'lib/i18n';
import namespaces from 'lib/i18n/namespaces';

import OverlayLoading from 'components/OverlayLoading';
import OverlayLoadingContainer from 'components/OverlayLoading/OverlayLoadingContainer';

import Notification from './notification';
import { NotificationsUIProps } from './types';

import { NotificationsProps } from './types';

const listWidth = 300;

const Notifications: React.FC<NotificationsProps> = props => {
  const { t } = useTranslation(namespaces.components.withPage);

  return (
    <>
      <Tooltip title={t<string>('notifications')}>
        <IconButton color="inherit" onClick={props.onClick}>
          <Badge badgeContent={props.newNotifications} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popover
        open={Boolean(props.anchorEl)}
        anchorEl={props.anchorEl}
        onClose={props.onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <OverlayLoadingContainer>
          <OverlayLoading loading={props.loading} />
          {props.notifications.length === 0 ? (
            <Box p={2}>
              <Typography>{t('noNotifications')}</Typography>
            </Box>
          ) : (
            <List className={classes.list}>
              {props.notifications.map((notification, index) => (
                <Notification
                  key={notification.id}
                  notification={notification}
                  fetchMore={
                    index !== props.notifications.length - 1
                      ? undefined
                      : props.onFetchMore
                  }
                  onClose={props.onClose}
                />
              ))}
              <Box pt={0.5}>
                <Button fullWidth color="primary" onClick={props.onReadAll}>
                  {t('readAllNotifications')}
                </Button>
              </Box>
            </List>
          )}
        </OverlayLoadingContainer>
      </Popover>
    </>
  );
};

export default Notifications;