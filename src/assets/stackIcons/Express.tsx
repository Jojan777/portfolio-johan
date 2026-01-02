interface Props {
  className?: string;
}

export const Express = ({ className }: Props) => {
  return (
    <div className={className}>
      <span className={'icons__span animate__animated animate__fadeIn'}>Express.js</span>
      <svg
        className="icons__icon"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_express)">
          <rect x="0.5" y="0.5" width="44" height="44" rx="0.5" stroke="#d87070" />
          <circle cx="22.5" cy="22.5" r="18" fill="#282c33" />
          <text
            x="22.5"
            y="27"
            fontFamily="Arial, sans-serif"
            fontSize="18"
            fontWeight="700"
            fill="#ffffff"
            textAnchor="middle"
            letterSpacing="-2"
          >
            ex
          </text>
        </g>
        <defs>
          <clipPath id="clip0_express">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

