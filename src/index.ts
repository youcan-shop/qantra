import type { ResourcePickerOptions } from './types';
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

export function resourcePicker({
  type,
}: ResourcePickerOptions): void {
  dispatch('QANTRA::RESOURCE_PICKER.REQ', type);
}
