
const pallete = [
    {   // orange
        text: '#f97316', 
        bgColor: opacity=> `rgba(251, 146, 60, ${opacity})`
    },
    {   // dark gray
        text: '#334155', 
        bgColor: opacity=> `rgba(30, 41, 59, ${opacity})`,
    },
    {   // purple
        text: '#7c3aed', 
        bgColor: opacity=> `rgba(167, 139, 250, ${opacity})`,
    },
    {   // red
        text: '#FF0000', 
        bgColor: opacity=> `rgba(210, 0, 0, ${opacity})`,
    },
    {
        // teal
        text: '#14b8a6',
        bgColor: opacity=> `rgba(45, 212, 191, ${opacity})`
    },
    {
        // red
        text: '#dc2626',
        bgColor: opacity=> `rgba(248, 113, 113, ${opacity})`
    }

]

export const themeColors={
   ...pallete[3]
}