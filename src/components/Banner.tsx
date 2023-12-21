"use client"
import { useState, useEffect } from "react";
import { renderTypeScript, renderFlask, renderPython, renderReact } from "../utils/view";

export function BannerResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  }, [isLandscape])
  return (
    <>
      {renderTypeScript(width, isLandscape)}{renderReact(width, isLandscape)}{renderPython(width, isLandscape)} {renderFlask(width, isLandscape)}
    </>
  )
}
