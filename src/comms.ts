import type {
  QantraMessageEvent,
  QantraMessageEventHandler,
  QantraMessagePayload,
  QantraMessagePayloadMap,
  QantraMessageType,
} from './types';

function is<T extends keyof QantraMessagePayloadMap>(
  event: MessageEvent,
  type: T,
): event is QantraMessageEvent<T> {
  if (
    typeof event.data !== 'object'
    || Array.isArray(event.data)
    || event.data === null
  ) {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!('type' in event.data) || event.data.type !== type) {
    return false;
  }

  if (!('payload' in event.data)) {
    return false;
  }

  return true;
}

export function subscribe<Type extends QantraMessageType>(
  type: Type,
  handler: QantraMessageEventHandler<Type>,
  options: AddEventListenerOptions = { once: true },
): void {
  window.addEventListener(
    'message',
    (evt) => {
      if (!is(evt, type)) {
        return;
      }

      return handler(...evt.data.payload);
    },
    options,
  );
}

export function dispatch<Type extends QantraMessageType>(
  type: Type,
  ...params: QantraMessagePayload<Type>
) {
  if (!window.top || !('postMessage' in window.top)) {
    throw new Error('could not find parent window, aborting...');
  }

  window.top.postMessage({ type, payload: params }, '*');
}
