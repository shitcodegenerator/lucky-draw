const screens = {
  wideDesktop: 1920,
  md: 1280,
  smallDesktop: 1024,
  sm: 768,
  largeHandset: 480,
  mediumHandset: 360,
  smallHandset: 320,
}

const breakpoints = (key) => {
  return (style) => `@media (max-width: ${screens[key]}px) { ${style} }`
}

export default breakpoints
