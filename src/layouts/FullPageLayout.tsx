import React from 'react';

export interface FullPageLayoutProps {
  children: React.ReactNode;
}
function FullPageLayout(props: FullPageLayoutProps) {
  return (
    <>
      {props.children}
    </>
  );
}

export default FullPageLayout;
