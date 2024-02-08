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
    setIsLandscape(window.innerWidth > window.innerHeight)
    setWidth(window.innerWidth)
  }, [])
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
