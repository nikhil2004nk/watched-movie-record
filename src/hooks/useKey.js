import { useEffect, useCallback } from "react";

export function useKey(key, cb) {
  const callbackRef = useCallback(cb);

  useEffect(
    function () {
      function handle(event) {
        if (event.code.toLowerCase() === key.toLowerCase()) {
          callbackRef(event);
        }
      }

      document.addEventListener("keydown", handle);
      return () => document.removeEventListener("keydown", handle);
    },
    [key, callbackRef]
  );
} 