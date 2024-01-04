import type { Resource, ResourcePickerOptions, ToastOptions } from './types';
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

export function bounce(url: string): void {
  dispatch('QANTRA::NAV.BOUNCE', url);
}

export function resourcePicker({
  type,
}: ResourcePickerOptions): Promise<Resource[]> {
  return new Promise((resolve) => {
    subscribe('QANTRA::RESOURCE_PICKER.RES', resources => resolve(resources));

    dispatch('QANTRA::RESOURCE_PICKER.REQ', type);
  });
}

export const toast = {
  show: (options: ToastOptions) => {
    dispatch('QANTRA::TOAST.REQ', options);
  },
};
