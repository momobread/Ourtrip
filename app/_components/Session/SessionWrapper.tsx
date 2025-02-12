'use client';

import { SessionProvider, useSession } from 'next-auth/react';

const SessionWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default SessionWrapper;
