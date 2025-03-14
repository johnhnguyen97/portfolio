import { Global } from '@emotion/react'
import { useColorModeValue } from '@chakra-ui/react'

const GlobalStyles = () => {
  const bgPattern = useColorModeValue(
    'none',
    "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg')"
  )

  return (
    <Global
      styles={`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

        body {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 15px;
          line-height: 1.7;
          background-image: ${bgPattern};
          background-position: center;
          background-repeat: repeat;
          background-size: 4%;
          overflow-x: hidden;
          transition: all 300ms linear;
        }

        a {
          cursor: pointer;
        }

        a:hover {
          text-decoration: none;
        }

        .section {
          position: relative;
          width: 100%;
          display: block;
        }

        .over-hide {
          overflow: hidden;
        }

        .full-height {
          height: 100vh;
        }
      `}
    />
  )
}

export default GlobalStyles
