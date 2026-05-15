// The animated DNA-helix logo mark. The SVG is static markup whose motion is
// driven entirely by self-contained SMIL animation, so it's injected as raw
// HTML to keep it byte-for-byte identical to the original design.
// `variant` selects the colour treatment: "nav" (light bg) or "footer" (dark bg).

const NAV_SVG = `
<svg class="logo-mark" viewBox="8 8 88 88" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <g transform="rotate(45 52 52)">
    <line x1="58.50" y1="14.50" x2="45.50" y2="14.50" stroke="#8C8C8C" stroke-width="2.6" stroke-linecap="round"/>
    <line x1="45.50" y1="39.50" x2="58.50" y2="39.50" stroke="#8C8C8C" stroke-width="2.6" stroke-linecap="round"/>
    <line x1="58.50" y1="64.50" x2="45.50" y2="64.50" stroke="#8C8C8C" stroke-width="2.6" stroke-linecap="round"/>
    <line x1="45.50" y1="89.50" x2="58.50" y2="89.50" stroke="#8C8C8C" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M 52.00 2.00 L 50.17 4.27 L 48.49 6.55 L 47.09 8.82 L 46.09 11.09 L 45.57 13.36 L 45.57 15.64 L 46.09 17.91 L 47.09 20.18 L 48.49 22.45 L 50.17 24.73 L 52.00 27.00" fill="none" stroke="#5C6B7A" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 27.00 L 50.17 29.27 L 48.49 31.55 L 47.09 33.82 L 46.09 36.09 L 45.57 38.36 L 45.57 40.64 L 46.09 42.91 L 47.09 45.18 L 48.49 47.45 L 50.17 49.73 L 52.00 52.00" fill="none" stroke="#0F6F8F" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 52.00 L 50.17 54.27 L 48.49 56.55 L 47.09 58.82 L 46.09 61.09 L 45.57 63.36 L 45.57 65.64 L 46.09 67.91 L 47.09 70.18 L 48.49 72.45 L 50.17 74.73 L 52.00 77.00" fill="none" stroke="#5C6B7A" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 77.00 L 50.17 79.27 L 48.49 81.55 L 47.09 83.82 L 46.09 86.09 L 45.57 88.36 L 45.57 90.64 L 46.09 92.91 L 47.09 95.18 L 48.49 97.45 L 50.17 99.73 L 52.00 102.00" fill="none" stroke="#0F6F8F" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 2.00 L 53.83 4.27 L 55.51 6.55 L 56.91 8.82 L 57.91 11.09 L 58.43 13.36 L 58.43 15.64 L 57.91 17.91 L 56.91 20.18 L 55.51 22.45 L 53.83 24.73 L 52.00 27.00" fill="none" stroke="#0F6F8F" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 27.00 L 53.83 29.27 L 55.51 31.55 L 56.91 33.82 L 57.91 36.09 L 58.43 38.36 L 58.43 40.64 L 57.91 42.91 L 56.91 45.18 L 55.51 47.45 L 53.83 49.73 L 52.00 52.00" fill="none" stroke="#5C6B7A" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 52.00 L 53.83 54.27 L 55.51 56.55 L 56.91 58.82 L 57.91 61.09 L 58.43 63.36 L 58.43 65.64 L 57.91 67.91 L 56.91 70.18 L 55.51 72.45 L 53.83 74.73 L 52.00 77.00" fill="none" stroke="#0F6F8F" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 77.00 L 53.83 79.27 L 55.51 81.55 L 56.91 83.82 L 57.91 86.09 L 58.43 88.36 L 58.43 90.64 L 57.91 92.91 L 56.91 95.18 L 55.51 97.45 L 53.83 99.73 L 52.00 102.00" fill="none" stroke="#5C6B7A" stroke-width="4.4" stroke-linecap="round"/>
    <g transform="translate(0 0)">
      <circle cx="45.50" cy="14.50" r="2.3" fill="#962B2B"><animate attributeName="r" values="2;2.9;2" dur="2.8s" begin="0s" repeatCount="indefinite"/></circle>
      <animateTransform attributeName="transform" type="translate" values="0 0;13 0;0 0" keyTimes="0;0.5;1" dur="2.8s" begin="0s" repeatCount="indefinite"/>
    </g>
    <g transform="translate(0 0)">
      <circle cx="45.50" cy="39.50" r="2.3" fill="#962B2B"><animate attributeName="r" values="2;2.9;2" dur="2.8s" begin="0.7s" repeatCount="indefinite"/></circle>
      <animateTransform attributeName="transform" type="translate" values="0 0;13 0;0 0" keyTimes="0;0.5;1" dur="2.8s" begin="0.7s" repeatCount="indefinite"/>
    </g>
    <g transform="translate(0 0)">
      <circle cx="45.50" cy="64.50" r="2.3" fill="#962B2B"><animate attributeName="r" values="2;2.9;2" dur="2.8s" begin="1.4s" repeatCount="indefinite"/></circle>
      <animateTransform attributeName="transform" type="translate" values="0 0;13 0;0 0" keyTimes="0;0.5;1" dur="2.8s" begin="1.4s" repeatCount="indefinite"/>
    </g>
    <g transform="translate(0 0)">
      <circle cx="45.50" cy="89.50" r="2.3" fill="#962B2B"><animate attributeName="r" values="2;2.9;2" dur="2.8s" begin="2.1s" repeatCount="indefinite"/></circle>
      <animateTransform attributeName="transform" type="translate" values="0 0;13 0;0 0" keyTimes="0;0.5;1" dur="2.8s" begin="2.1s" repeatCount="indefinite"/>
    </g>
  </g>
</svg>`

const FOOTER_SVG = `
<svg class="logo-mark" viewBox="8 8 88 88" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <g transform="rotate(45 52 52)">
    <line x1="58.50" y1="14.50" x2="45.50" y2="14.50" stroke="#9BA6AE" stroke-width="2.6" stroke-linecap="round"/>
    <line x1="45.50" y1="39.50" x2="58.50" y2="39.50" stroke="#9BA6AE" stroke-width="2.6" stroke-linecap="round"/>
    <line x1="58.50" y1="64.50" x2="45.50" y2="64.50" stroke="#9BA6AE" stroke-width="2.6" stroke-linecap="round"/>
    <line x1="45.50" y1="89.50" x2="58.50" y2="89.50" stroke="#9BA6AE" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M 52.00 2.00 L 50.17 4.27 L 48.49 6.55 L 47.09 8.82 L 46.09 11.09 L 45.57 13.36 L 45.57 15.64 L 46.09 17.91 L 47.09 20.18 L 48.49 22.45 L 50.17 24.73 L 52.00 27.00" fill="none" stroke="#AEBAC6" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 27.00 L 50.17 29.27 L 48.49 31.55 L 47.09 33.82 L 46.09 36.09 L 45.57 38.36 L 45.57 40.64 L 46.09 42.91 L 47.09 45.18 L 48.49 47.45 L 50.17 49.73 L 52.00 52.00" fill="none" stroke="#7FD5EA" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 52.00 L 50.17 54.27 L 48.49 56.55 L 47.09 58.82 L 46.09 61.09 L 45.57 63.36 L 45.57 65.64 L 46.09 67.91 L 47.09 70.18 L 48.49 72.45 L 50.17 74.73 L 52.00 77.00" fill="none" stroke="#AEBAC6" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 77.00 L 50.17 79.27 L 48.49 81.55 L 47.09 83.82 L 46.09 86.09 L 45.57 88.36 L 45.57 90.64 L 46.09 92.91 L 47.09 95.18 L 48.49 97.45 L 50.17 99.73 L 52.00 102.00" fill="none" stroke="#7FD5EA" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 2.00 L 53.83 4.27 L 55.51 6.55 L 56.91 8.82 L 57.91 11.09 L 58.43 13.36 L 58.43 15.64 L 57.91 17.91 L 56.91 20.18 L 55.51 22.45 L 53.83 24.73 L 52.00 27.00" fill="none" stroke="#7FD5EA" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 27.00 L 53.83 29.27 L 55.51 31.55 L 56.91 33.82 L 57.91 36.09 L 58.43 38.36 L 58.43 40.64 L 57.91 42.91 L 56.91 45.18 L 55.51 47.45 L 53.83 49.73 L 52.00 52.00" fill="none" stroke="#AEBAC6" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 52.00 L 53.83 54.27 L 55.51 56.55 L 56.91 58.82 L 57.91 61.09 L 58.43 63.36 L 58.43 65.64 L 57.91 67.91 L 56.91 70.18 L 55.51 72.45 L 53.83 74.73 L 52.00 77.00" fill="none" stroke="#7FD5EA" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M 52.00 77.00 L 53.83 79.27 L 55.51 81.55 L 56.91 83.82 L 57.91 86.09 L 58.43 88.36 L 58.43 90.64 L 57.91 92.91 L 56.91 95.18 L 55.51 97.45 L 53.83 99.73 L 52.00 102.00" fill="none" stroke="#AEBAC6" stroke-width="4.4" stroke-linecap="round"/>
    <g transform="translate(0 0)">
      <circle cx="45.50" cy="14.50" r="2.3" fill="#E8705A"><animate attributeName="r" values="2;2.9;2" dur="2.8s" begin="0s" repeatCount="indefinite"/></circle>
      <animateTransform attributeName="transform" type="translate" values="0 0;13 0;0 0" keyTimes="0;0.5;1" dur="2.8s" begin="0s" repeatCount="indefinite"/>
    </g>
    <g transform="translate(0 0)">
      <circle cx="45.50" cy="39.50" r="2.3" fill="#E8705A"><animate attributeName="r" values="2;2.9;2" dur="2.8s" begin="0.7s" repeatCount="indefinite"/></circle>
      <animateTransform attributeName="transform" type="translate" values="0 0;13 0;0 0" keyTimes="0;0.5;1" dur="2.8s" begin="0.7s" repeatCount="indefinite"/>
    </g>
    <g transform="translate(0 0)">
      <circle cx="45.50" cy="64.50" r="2.3" fill="#E8705A"><animate attributeName="r" values="2;2.9;2" dur="2.8s" begin="1.4s" repeatCount="indefinite"/></circle>
      <animateTransform attributeName="transform" type="translate" values="0 0;13 0;0 0" keyTimes="0;0.5;1" dur="2.8s" begin="1.4s" repeatCount="indefinite"/>
    </g>
    <g transform="translate(0 0)">
      <circle cx="45.50" cy="89.50" r="2.3" fill="#E8705A"><animate attributeName="r" values="2;2.9;2" dur="2.8s" begin="2.1s" repeatCount="indefinite"/></circle>
      <animateTransform attributeName="transform" type="translate" values="0 0;13 0;0 0" keyTimes="0;0.5;1" dur="2.8s" begin="2.1s" repeatCount="indefinite"/>
    </g>
  </g>
</svg>`

export default function HelixLogo({ variant = 'nav' }) {
  return (
    <span
      className="logo-mark-wrap"
      dangerouslySetInnerHTML={{ __html: variant === 'footer' ? FOOTER_SVG : NAV_SVG }}
    />
  )
}
