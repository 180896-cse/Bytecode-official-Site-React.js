import React from 'react';
import '../Styles/Animatedlogo.css';
import {motion} from 'framer-motion';

const svgVariants={
    hidden:{rotate:0},
    visible:{
        rotate:0,
        transition:{duration:1},
    
    }
}

const pathVariants={
    hidden:{
        opacity:0,
        pathLength:0
    },
    visible:{
        opacity:1,
        pathLength:1,
        transition:{
            duration:3,
            ease:"easeInOut"
        }
    }
}




function Animated_logo() {
    return (
        <div className='mnpart_animation'>
         <motion.svg viewBox="0 0 651 506" fill="none" xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial='hidden'
            animate='visible'
            
         >
            <g id="byte-code_logo 1">
            <g id="upperoutervector">
            <motion.path id="Vector" d="M142.826 167.728C140.941 165.351 113.724 120.266 109.246 112.221C104.769 104.176 109.694 96.5342 109.694 96.5342C109.694 96.5342 171.655 6.98084 175.51 4.02246C179.365 1.06409 181.599 0.657728 187.151 0.804659C192.703 0.951592 445.939 2.81579 451.76 2.81579C457.58 2.81579 459.371 3.2178 460.267 4.02246C461.162 4.82713 479.072 23.7316 479.072 23.7316C483.21 27.8973 482.15 28.6652 476.385 28.5583L263.265 27.7538C260.258 21.2666 257.862 17.6448 249.386 11.2626L242.67 8.04476C234.48 6.71359 230.581 5.63137 221.179 8.44698C211.776 11.2626 205.956 16.4917 203.27 25.3405C200.583 34.1892 200.696 38.8948 203.27 47.0607C209.196 56.2246 213.455 58.6999 221.179 62.7475C232.07 65.2518 238.012 64.5958 248.49 61.943L252.52 59.1274C258.42 53.7728 260.815 50.6024 263.265 44.6473L266.4 41.8317H485.788L501.906 59.5297C505.565 63.7756 504.883 64.9994 497.876 64.7586L218.492 66.7697C215.668 67.8194 214.303 69.0712 212.224 72.4009C212.224 72.4009 151.244 165.719 149.99 167.728C148.735 169.738 144.711 170.105 142.826 167.728Z" fill="#108A23"variants={pathVariants}/>
            <motion.path id="Vector_2" d="M233.268 53.0938C244.889 53.0938 254.311 44.9901 254.311 34.9936C254.311 24.9972 244.889 16.8935 233.268 16.8935C221.646 16.8935 212.224 24.9972 212.224 34.9936C212.224 44.9901 221.646 53.0938 233.268 53.0938Z" fill="#108A23"/>
            </g>
            <g id="rightoutervector">
            <motion.path id="Vector_3" d="M467.006 118.792C470.249 118.615 527.233 121.771 537.199 122.623C547.165 123.474 551.77 131.277 551.77 131.277C551.77 131.277 603.473 225.939 604.223 230.443C604.972 234.948 608.602 238.572 605.52 242.725C602.44 246.877 467.878 447.337 467.878 447.337C464.407 451.749 461.708 453.105 456.685 454.113C451.662 455.121 425.428 454.113 425.428 454.113C420.682 454.468 419.835 450.433 421.622 446.665L535.317 284.724C543.035 285.871 547.724 285.966 558.24 282.889L564.837 279.478C570.434 273.944 573.521 271.547 575.846 262.892C578.17 254.236 576.319 247.031 569.389 240.295C562.46 233.56 557.957 231.152 548.885 228.785C537.094 228.444 532.501 230.376 524.587 234.116C516.451 241.087 513.922 245.962 510.873 255.351L511.396 259.913C513.324 267.245 515.048 270.749 519.37 275.772L522.501 280.351L413.15 450.395L378.861 449.696C372.915 450.233 372.12 449.065 376.06 443.855L522.213 229.939C522.719 227.23 522.261 225.526 520.219 222.179C520.219 222.179 464.441 126.27 463.21 124.249C461.979 122.229 463.763 118.968 467.006 118.792Z" fill="#108A23"variants={pathVariants}/>
            <motion.path id="Vector_4" d="M547.574 277.536C559.196 277.536 568.618 269.432 568.618 259.436C568.618 249.439 559.196 241.335 547.574 241.335C535.952 241.335 526.531 249.439 526.531 259.436C526.531 269.432 535.952 277.536 547.574 277.536Z" fill="#108A23"/>
            </g>
            <g id="leftoutervector">
            <motion.path id="Vector_5" d="M345.291 393.254C343.89 395.887 313.192 439.131 307.531 446.549C301.87 453.966 292.041 453.802 292.041 453.802C292.041 453.802 174.815 448.534 170.067 446.939C165.317 445.344 160.03 446.438 157.481 442.005C154.933 437.571 25.0069 234.657 25.0069 234.657C22.3953 229.791 22.3829 227.012 23.8367 222.577C25.2906 218.142 38.9903 198.018 38.9903 198.018C40.9452 194.117 45.2841 195.407 48.0867 198.638L150.626 366.482C145.768 371.99 143.404 375.628 141.299 385.383L141.423 392.22C144.098 399.301 144.934 402.889 152.234 408.911C159.533 414.934 167.446 416.972 177.363 414.793C187.28 412.614 191.807 410.244 198.509 404.263C204.557 395.163 204.903 390.617 205.099 382.586C202.257 372.814 198.738 368.464 191.074 361.516L186.379 359.715C178.306 357.675 174.059 357.331 167.073 358.292L161.097 358.532L48.5625 190.173L65.8668 163.571C68.2267 158.637 69.7487 158.58 72.9111 164.201L210.317 382.747C212.709 384.457 214.589 384.923 218.838 384.941C218.838 384.941 339.253 387.614 341.818 387.625C344.382 387.637 346.691 390.62 345.291 393.254Z" fill="#108A23"variants={pathVariants}/>
            <motion.path id="Vector_6" d="M175.063 407.052C186.684 407.052 196.106 398.949 196.106 388.952C196.106 378.956 186.684 370.852 175.063 370.852C163.441 370.852 154.019 378.956 154.019 388.952C154.019 398.949 163.441 407.052 175.063 407.052Z" fill="#108A23"/>
            </g>
            <g id="innerleftupvector">
            <motion.path id="Vector_7" d="M245.804 113.025C242.746 114.193 241.713 115.356 240.431 117.852L173.719 224.844C171.928 228.464 171.481 228.866 173.719 232.889L208.195 281.96H245.356C249.386 281.96 248.043 280.351 245.356 276.329L214.015 229.671C213.065 227.281 212.92 225.892 214.015 223.235L282.07 119.059C285.652 113.428 286.547 113.025 279.832 113.025H245.804Z" fill="#108A23"/>
            </g>
            <g id="innerrightupvector">
            <motion.path id="Vector_8" d="M466.043 228.956C466.505 225.999 465.927 224.604 464.205 222.333L396.479 115.856C393.947 112.613 393.794 112.06 388.804 111.713L324.226 112.987L305.086 141.603C303.011 144.706 305.238 144.5 310.46 144.504L371.12 144.4C373.889 144.899 375.29 145.503 377.26 147.714L441.608 253.775C445.136 259.433 445.059 260.33 448.518 255.158L466.043 228.956Z" fill="#108A23"/>
            </g>
            <g id="innerbottomvector">
            <motion.path id="Vector_9" d="M243.378 343.293C246.031 345.089 247.67 345.311 250.717 345.06L387.213 343.466C391.598 343.05 392.21 343.197 394.968 339.444L425.036 288.086L406.455 259.174C404.44 256.039 403.561 257.889 401.027 261.99L371.718 309.703C369.89 311.636 368.623 312.445 365.515 312.92L231.061 312.061C223.842 312.09 223.006 311.595 226.364 316.82L243.378 343.293Z" fill="#108A23"/>
            </g>
            
            </g>
        </motion.svg>
   
    </div>
    )
}

export default Animated_logo