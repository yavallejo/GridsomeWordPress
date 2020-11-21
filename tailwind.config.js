module.exports = {
    theme: {
        extend: {
            colors: {
                'dark-1'            : '#272D3D',
                'dark-2'            : '#2A3040',
                'dark-3'            : '#7C7F86',
                'light-1'           : '#F9FAFD',
                'light-2'           : '#F4F4F5',
                'light-3'           : '#BDBDBD',
                'primary'           : '#3E408E',
                'secondary'         : '#323576'
            },
            fontFamily: {
                playfair: ['Playfair Display', 'sans-serif'],
                inter: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '540px',
                    },
                    '@screen md': {
                        maxWidth: '720px',
                    },
                    '@screen lg': {
                        maxWidth: '960px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                }
            })
        }
    ]
}
