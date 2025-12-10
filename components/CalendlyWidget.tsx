'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

const CalendlyWidget = () => {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="lazyOnload"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/muhammed-ali-hissein/30min',
            text: 'Book a Meeting',
            color: '#646cff',
            textColor: '#ffffff',
            branding: false
          });
        }
      }}
    />
  );
};

export default CalendlyWidget;
