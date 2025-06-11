import { useEffect, useState } from 'react';
import pubsub from '../pubsub/pubsub';
import { getSharedState, setSharedState } from '../sharedState';

export function useSharedState<T>(key: string): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(() => getSharedState<T>(key));

  useEffect(() => {
    const update = (newValue: T) => {
      setValue(newValue);
    };

    pubsub.subscribe<T>(key, update);

    return () => {
      pubsub.unsubscribe<T>(key, update);
    };
  }, [key]);

  const setter = (newValue: T) => {
    setSharedState<T>(key, newValue);
  };

  return [value, setter];
}
