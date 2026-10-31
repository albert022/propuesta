'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear().toString();
const getServerSnapshot = () => '2026';

export const CurrentYear: React.FC = () => {
  const year = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <>{year}</>;
};

export default CurrentYear;
