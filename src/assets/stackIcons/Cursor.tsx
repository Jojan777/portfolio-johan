interface Props {
  className?: string;
}

export const Cursor = ({ className }: Props) => {
  return (
    <div className={className}>
      <span className={'icons__span animate__animated animate__fadeIn'}>Cursor</span>
      <svg
        className="icons__icon"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_cursor)">
          <rect x="0.5" y="0.5" width="44" height="44" rx="0.5" stroke="#d87070" />
          <path
            d="M14 12L14 33L20 27L25 32L25 15L20 21L14 12Z"
            fill="#d87070"
          />
          <path
            d="M20 21L25 15"
            stroke="#282c33"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 12L20 21L25 15"
            stroke="#282c33"
            strokeWidth="1.5"
            fill="none"
            strokeLinejoin="round"
          />
          <path
            d="M14 33L20 27L25 32"
            stroke="#282c33"
            strokeWidth="1.5"
            fill="none"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_cursor">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

