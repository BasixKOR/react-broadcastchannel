import React from 'react';

export type StructedClonable =
  | null
  | undefined
  | boolean
  | string
  | number
  | bigint
  | Boolean
  | String
  | Date
  | RegExp
  | Blob
  | File
  | FileList
  | ArrayBuffer
  | ArrayBufferView
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array
  | ImageBitmap
  | ImageData
  | StructedClonable[]
  | Object // FIXME: should not allow 'non-plain' objects
  | Map<StructedClonable, StructedClonable>
  | Set<StructedClonable>;

export interface MessageEvent<T extends StructedClonable> extends globalThis.MessageEvent {
  readonly data: T;
}

export function useBroadcastChannel<T extends StructedClonable>(
  channelId: string,
  onmessage?: (ev: MessageEvent<T>) => void
): [(message: T) => void] {
  let channel = React.useRef<BroadcastChannel>(null!);
  React.useEffect(() => {
    channel.current = new window.BroadcastChannel(channelId);
    if(onmessage) channel.current.onmessage = onmessage;
    return () => channel.current?.close();
  }, []);

  let post = (message: T) => channel.current.postMessage(message);
  return [post];
}
