import { dispatch, subscribe } from './comms';

export function sessionToken(): Promise<string> {
  return new Promise((resolve) => {
    subscribe('QANTRA::SESSION_TOKEN.RES', id => resolve(id));

    dispatch('QANTRA::SESSION_TOKEN.REQ');
  });
}

export function redirect(url: string): void {
  dispatch('QANTRA::NAV.REDIRECT.REMOTE', url);
}
