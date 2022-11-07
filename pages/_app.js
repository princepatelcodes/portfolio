import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // 1. Import the extendTheme function

  // 2. Extend the theme to include custom colors, fonts, etc

  const theme = extendTheme({
    colors: {
      "green": {
        "50": "#E8FCF2",
        "100": "#BFF7DA",
        "200": "#97F2C1",
        "300": "#6EEDA9",
        "400": "#45E891",
        "500": "#1CE379",
        "600": "#17B561",
        "700": "#118849",
        "800": "#0B5B30",
        "900": "#062D18"
      },
      "primary": {
        "50": "#EEE8FC",
        "100": "#D1BFF7",
        "200": "#B396F2",
        "300": "#956DED",
        "400": "#7745E8",
        "500": "#591CE3",
        "600": "#4716B6",
        "700": "#351188",
        "800": "#240B5B",
        "900": "#12062D"
      },
      "purple": {
        "50": "#EEE8FC",
        "100": "#D1BFF7",
        "200": "#B396F2",
        "300": "#956DED",
        "400": "#7745E8",
        "500": "#591CE3",
        "600": "#4716B6",
        "700": "#351188",
        "800": "#240B5B",
        "900": "#12062D"
      },
      "yellow": {
        "50": "#FEFEE7",
        "100": "#FCFBBB",
        "200": "#F9F88F",
        "300": "#F7F664",
        "400": "#F5F338",
        "500": "#F3F00C",
        "600": "#C2C00A",
        "700": "#929007",
        "800": "#616005",
        "900": "#313002"
      }
    },

    fonts: {
      heading: `'Manrope', sans-serif`,
      body: `'Manrope', sans-serif`,
    },
    initialColorMode: 'dark',
    useSystemColorMode: false,
  })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
