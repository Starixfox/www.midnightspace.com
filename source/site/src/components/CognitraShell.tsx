import type { ReactNode } from 'react';
import { BackgroundVideo } from './BackgroundVideo';
import { Navbar } from './Navbar';
import { RepostButton } from './RepostButton';
import { ScrollIndicator } from './ScrollIndicator';
import { ScrollObject3D } from './ScrollObject3D';

type CognitraShellProps = {
  children: ReactNode;
  showChrome?: boolean;
};

export function CognitraShell({ children, showChrome = true }: CognitraShellProps) {
  return (
    <div style={{ position: 'relative' }}>
      <BackgroundVideo />
      <Navbar />
      {children}
      <ScrollObject3D />
      {showChrome && (
        <>
          <ScrollIndicator />
          <RepostButton />
        </>
      )}
    </div>
  );
}
