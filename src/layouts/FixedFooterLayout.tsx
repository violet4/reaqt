import React from "react";

interface FixedFooterLayoutProps {
  mainContent: JSX.Element;
  footerContent: JSX.Element;
  footerHeight: number;
}

export const FixedFooterLayout = ({ mainContent, footerContent, footerHeight }: FixedFooterLayoutProps) => (
  <div className='fixed-footer-layout' style={{
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
  }}>
    {/*overflow: 'auto'*/}
    <div className='fixed-footer-layout-content' style={{ flex: 1, width: '100%', paddingBottom: `${footerHeight}px` }}>
      {React.cloneElement(mainContent, {style: {...mainContent.props.style, width: '100%', height: '100%'}})}
    </div>
    <div className='fixed-footer-layout-footer' style={{
      height: `${footerHeight}px`,
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      background: '#444',
    }}>
      {footerContent}
    </div>
  </div>
);

