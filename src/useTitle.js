import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Brick City`;
  }, [title]);
};
export default useTitle;
