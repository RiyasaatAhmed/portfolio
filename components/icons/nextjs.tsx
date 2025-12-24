export const NextJsIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      className={className}
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <mask
        height="180"
        id="mask0_408_134"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="180"
        x="0"
        y="0"
      >
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask="url(#mask0_408_134)">
        <circle cx="90" cy="90" data-circle="true" fill="currentColor" r="90" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          className="fill-white dark:fill-black"
        />
        <rect
          className="fill-white dark:fill-black"
          height="72"
          width="12"
          x="115"
          y="54"
        />
      </g>
    </svg>
  );
};
