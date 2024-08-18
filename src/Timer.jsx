import React, { useEffect, useState } from "react";

export default function Timer({
  timeSecend,
  setTimeSecend,
  timeMin,
  setTimeMin,
}) {
  useEffect(() => {
    if (timeMin < 10) {
      timeSecend == 60 && setTimeSecend(0);
      setTimeout(() => {
        timeSecend < 60 && setTimeSecend((prev) => prev + 1);
      }, 1000);
      timeSecend == 60 && setTimeMin((prev) => prev + 1);
    }
  }, [timeSecend]);
  return (
    <div>
      <h1>
        {timeMin < 10 && 0}
        {timeMin}:{timeSecend < 10 && 0}
        {timeSecend}
      </h1>
    </div>
  );
}
