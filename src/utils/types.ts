type EventCallback<T = any> = (data: T) => void;

interface Subscriber<T = any> {
  fn: EventCallback<T>;
  componentName?: string;
  timestamp?: number;
}

type Middleware<T> = (value: T, next: (v: T) => void) => void;

export {EventCallback, Subscriber, Middleware}