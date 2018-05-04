import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

const typography = new Typography(bootstrapTheme)

const options = {
  baseFontSize: `18px`,
  baseLineHeight: 1.45,
  blockMarginBottom: 0.75,
  scaleRatio: 2.15,
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      'h1,h2,h3,h4': {
        lineHeight: 1.2,
      },
      [TABLET_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 17px.
        html: {
          fontSize: `${17 / 16 * 100}%`,
        },
      },
      [MOBILE_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 16px.
        html: {
          fontSize: `${16 / 16 * 100}%`,
        },
      },
    }
  },
}

export default typography
