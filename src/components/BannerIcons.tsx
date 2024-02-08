"use client"
import { useState, useEffect } from "react";
import { renderTypeScript, renderFlask, renderPython, renderReact } from "../utils/view";
import Banner from "./Banner";

/**
 * 
 * Banner -> BannerIcons 
 */
export function BannerIcons() {
  const [width, setWidth] = useState(0);
  const [isLandscape, setIsLandscape] = useState(true);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  }, [isLandscape])
  useEffect(() => {
    setWidth(window.innerWidth)
    setIsLandscape(window.innerWidth > window.innerHeight)
  }, [])
  return (
    <>
      {renderTypeScript(width, isLandscape)}{renderReact(width, isLandscape)}{renderPython(width, isLandscape)} {renderFlask(width, isLandscape)}
    </>
  )
}
