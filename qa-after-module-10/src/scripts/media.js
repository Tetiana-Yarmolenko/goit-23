export const breakPoints = {
  sm: 458,
  md: 768,
  lg: 998,
  xl: 1200,
  xxl: 1600
}

export default {
  get isDesktop() {
    return window.innerWidth >= breakPoints.xl
  },
  get IsTablet() {
    return window.innerWidth < breakPoints.xl && window.innerWidth > breakPoints.md
  },
  get isMobile() {
    return window.innerWidth <= breakPoints.md
  }
}