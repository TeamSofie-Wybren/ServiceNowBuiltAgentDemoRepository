import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import welcomePage from '../../client/index.html';

export const welcome_screen = UiPage({
  $id: Now.ID['welcome-screen'],
  endpoint: 'x_sofbv_figma_test_welcome.do',
  html: welcomePage,
  direct: true
});