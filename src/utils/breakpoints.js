const screens = {
  md: 1280,
  sm: 768,
}

const breakpoints = (key) => {
  return (style) => `@media (max-width: ${screens[key]}px) { ${style} }`
}

export default breakpoints
