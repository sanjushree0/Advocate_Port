export default function ScalesEmblem({ className = "" }) {
  return (
    <svg
      className={`scales-emblem ${className}`}
      viewBox="0 0 420 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of the scales of justice"
    >
      <circle
        cx="210"
        cy="230"
        r="188"
        stroke="var(--gold-line, rgba(217,189,133,0.28))"
        strokeWidth="1"
        className="scales-ring"
      />
      <circle
        cx="210"
        cy="230"
        r="150"
        stroke="var(--gold-line, rgba(217,189,133,0.16))"
        strokeWidth="1"
      />

      {/* stand */}
      <path
        className="scales-draw"
        d="M210 396V118"
        stroke="#d9bd85"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="scales-draw"
        d="M150 396H270"
        stroke="#d9bd85"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        className="scales-draw"
        d="M210 118C210 118 190 108 190 92C190 80 199 72 210 72C221 72 230 80 230 92C230 108 210 118 210 118Z"
        stroke="#d9bd85"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* beam group balances gently */}
      <g className="scales-beam">
        <path
          className="scales-draw"
          d="M96 128L324 128"
          stroke="#d9bd85"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* left arm */}
        <path
          className="scales-draw"
          d="M96 128L60 210"
          stroke="#d9bd85"
          strokeWidth="2.5"
        />
        <path
          className="scales-draw"
          d="M132 128L60 210"
          stroke="#d9bd85"
          strokeWidth="2.5"
        />
        <path
          className="scales-draw scales-pan-left"
          d="M34 210C34 210 34 244 78 244C122 244 122 210 122 210H34Z"
          stroke="#d9bd85"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* right arm */}
        <path
          className="scales-draw"
          d="M324 128L288 210"
          stroke="#d9bd85"
          strokeWidth="2.5"
        />
        <path
          className="scales-draw"
          d="M360 128L288 210"
          stroke="#d9bd85"
          strokeWidth="2.5"
        />
        <path
          className="scales-draw scales-pan-right"
          d="M262 210C262 210 262 244 306 244C350 244 350 210 350 210H262Z"
          stroke="#d9bd85"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </g>

      <path
        className="scales-draw"
        d="M150 396C150 396 170 412 210 412C250 412 270 396 270 396"
        stroke="#d9bd85"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
