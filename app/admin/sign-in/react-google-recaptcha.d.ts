import React from 'react';

declare module 'react-google-recaptcha' {
  
    export interface ReCAPTCHAProps {
      sitekey: string;
      onChange?: (value: string) => void;
    }
  
    export interface ReCAPTCHAInstance {
      getValue: () => string;
      reset: () => void;
    }
  
    const ReCAPTCHA: React.ForwardRefExoticComponent<
      ReCAPTCHAProps & React.RefAttributes<ReCAPTCHAInstance>
    >;
  
    export default ReCAPTCHA;
  }