import { useEffect, useRef } from "react";

export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  ignoredRef?: React.RefObject<HTMLElement>,
  callback?: () => void
) {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      (!ignoredRef ||
        !ignoredRef.current ||
        !ignoredRef.current.contains(event.target as Node))
    ) {
      callback && callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, ignoredRef, callback]);
}
