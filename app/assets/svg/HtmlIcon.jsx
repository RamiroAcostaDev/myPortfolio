import React from "react";

export default function HtmlIcon({ IconColor, IconWidth }) {
  return (
    <svg width={IconWidth} viewBox="0 0 32 32">
      <path
        fill={IconColor}
        d="M4 2l2.181 24.738 9.788 3.262 9.85-3.262 2.181-24.738zM23.262 9.994h-11.488l0.256 3.088h10.975l-0.85 9.275-6.119 1.688v0.019h-0.069l-6.169-1.706-0.375-4.738h2.981l0.219 2.381 3.344 0.906 3.356-0.906 0.375-3.887h-10.431l-0.8-9.1h15.069z"
      />
    </svg>
  );
}
