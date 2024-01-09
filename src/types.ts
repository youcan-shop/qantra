export type ResourcePickerType = 'product' | 'collection';
export interface ResourcePickerOptions {
  type: ResourcePickerType
}

interface BaseResource {
  id?: number | string
  price?: string
  stock?: number
  name?: string
  thumbnailUrl?: string
}

interface Variant extends BaseResource {}

export interface Resource extends BaseResource {
  variants?: Variant[]
}

type AlertType = 'warning' | 'success' | 'info' | 'error';
type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export interface ToastOptions {
  title: string
  description: string
  position?: ToastPosition
  type?: AlertType
  closeAfterDuration?: number
  canClose?: boolean
}

export interface QantraMessagePayloadMap {
  'QANTRA::SESSION_TOKEN.REQ': []
  'QANTRA::SESSION_TOKEN.RES': [string]

  'QANTRA::NAV.REDIRECT.REMOTE': [string]
  'QANTRA::NAV.BOUNCE': [string]

  'QANTRA::RESOURCE_PICKER.REQ': [ResourcePickerType]
  'QANTRA::RESOURCE_PICKER.RES': [Resource[]]

  'QANTRA::TOAST.REQ': [ToastOptions]
}

export type QantraMessageType = keyof QantraMessagePayloadMap;
export type QantraMessagePayload<T extends QantraMessageType> = QantraMessagePayloadMap[T];
export type QantraMessageEventHandler<T extends QantraMessageType> = (...params: QantraMessagePayloadMap[T]) => void;
export type QantraMessageEvent<T extends QantraMessageType> = MessageEvent<{ type: QantraMessageType; payload: QantraMessagePayload<T> }>;
