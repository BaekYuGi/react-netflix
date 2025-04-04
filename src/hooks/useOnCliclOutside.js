import React, { useEffect } from "react";

const useOnclickOutside = (ref, handler) => {
  useEffect(() => {
    const Listener = (e) => {
      console.log(ref.current);
      if(!ref.current || ref.current.contains(e.target)) {
        return
      }
      handler();
    };
    document.addEventListener("mousedown", Listener);
    document.addEventListener("touchstart", Listener);
    return () => {
      document.addEventListener("mousedown", Listener);
      document.addEventListener("touchstart", Listener);
    };
  }, []);
};

export default useOnclickOutside;
