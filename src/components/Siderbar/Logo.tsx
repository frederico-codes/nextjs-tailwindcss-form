import * as React from "react"

export function Logo() {
  return (
    <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900">

    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <g filter="url(#filter0_dd_31001_283)">
        <circle cx={11} cy={10} r={8} fill="url(#paint0_linear_31001_283)" />
      </g>
      <defs>
        <filter
          id="filter0_dd_31001_283"
          x={0}
          y={0}
          width={22}
          height={22}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_31001_283"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_dropShadow_31001_283"
            result="effect2_dropShadow_31001_283"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_31001_283"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_31001_283"
          x1={7}
          y1={18}
          x2={15}
          y2={2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#53389E" />
          <stop offset={1} stopColor="#6941C6" />
        </linearGradient>
      </defs>
    </svg>
      <span>Untitled UI</span>
    </strong>
  )
}


