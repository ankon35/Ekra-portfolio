tailwind.config = {
    theme:{
        extend:{

            gridTemplateColums:{
                'auto': 'repeat(auto-fit , minmax(200px , 1fr))'
            },
            fontFamily:{
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow: 'spin 6s linear infinite'
            },
            colors:{
                lightHover: '#fcf4ff',
                darHover: '#254336',
                darkTheme: '#6B8A7A'
            },
            boxShadow:{
                'black': '4px 4px 0 #000',
                'white' : '4px 4px 0 #fff'
            }
        }
       
    },
    darkMode : 'selector'
}