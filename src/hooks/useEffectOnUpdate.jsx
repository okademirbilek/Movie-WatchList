import React, { useEffect, useRef } from "react";

export default function useEffectOnUpdate(effectFunction, deps) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, deps);
}
