import React from 'react';

interface WhatsAppIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Ícono vectorial de WhatsApp compatible con clases de tamaño y color (currentColor).
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-4 h-4',
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M3.9 16.21A9.4 9.4 0 1 1 7.79 20.1L2.6 21.4Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.9 7.3L9.85 7.3Q10.25 7.3 10.45 7.7L11.1 9.2Q11.25 9.55 10.95 9.85L10.1 10.7C9.0 12.9 11.1 15.0 13.3 13.9L14.15 13.05Q14.45 12.75 14.8 12.9L16.3 13.55Q16.7 13.75 16.7 14.15L16.7 15.1Q16.7 16.7 15.1 16.7C8.5 16.7 7.3 15.5 7.3 8.9Q7.3 7.3 8.9 7.3Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WhatsAppIcon;
