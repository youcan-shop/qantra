export type ResourcePickerType = 'product' | 'variant' | 'collection';
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

export interface QantraMessagePayloadMap {
  'QANTRA::SESSION_TOKEN.REQ': []
  'QANTRA::SESSION_TOKEN.RES': [string]

  'QANTRA::NAV.REDIRECT.REMOTE': [string]

  'QANTRA::RESOURCE_PICKER.REQ': [ResourcePickerType]
  'QANTRA::RESOURCE_PICKER.RES': [Resource[]]
}

export type QantraMessageType = keyof QantraMessagePayloadMap;
export type QantraMessagePayload<T extends QantraMessageType> = QantraMessagePayloadMap[T];
export type QantraMessageEventHandler<T extends QantraMessageType> = (...params: QantraMessagePayloadMap[T]) => void;
export type QantraMessageEvent<T extends QantraMessageType> = MessageEvent<{ type: QantraMessageType; payload: QantraMessagePayload<T> }>;
