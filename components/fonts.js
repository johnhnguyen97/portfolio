import { Global } from '@emotion/react';

const Fonts = () => (
    <Global
    styles={`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');
        `}
    />
)

export default Fonts
