import { useEffect, useRef } from "react";
/*
    const x= {}
    const y={}
    const z=x
    x is not triple equal to y
    z is triple equal to x
    thus z is refering to x
     */
import { createPortal } from "react-dom";
const Modal = ({ children }) => {
  const elementRef = useRef(null);
  //useRef means that i will ref to the same value across all renders
  //elmentRef is mutable ref object only has current key
  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elementRef.current);

    return () => modalRoot.removeChild(elementRef.current);
    //cleanup function when the modal get stopped rendering
    //this function will get invoked when Modal goes away
  }, []);

  return createPortal(<div>{children}</div>, elementRef.current);
};
export default Modal;
