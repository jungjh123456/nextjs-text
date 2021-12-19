import React from "react";

const TaskICon = () => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
      <path d="M0 24.68H24V0.68H0V24.68Z" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkhref="#image0_345_1332" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_345_1332"
          width="64"
          height="64"
          xlinkhref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default TaskICon;