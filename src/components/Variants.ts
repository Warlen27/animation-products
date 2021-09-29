

export const firstItem = {
    initial: (direction: number) => ({
        right: direction < 0 ? ['100%', '100%'] : ['72%', '18%'],

        opacity: 0,
        visibility: direction < 0 ? 'hidden' : 'visible',
        height: direction < 0 ? ['94vh', '60vh'] : ['100vh', '60vh'],
        width: ['30vw', '22vw'],
        transition: {
            delay: 1,
            duration: 1,
        },

    }),

    middle: (direction: number) => ({
        right: direction < 0 ? '-54%' : ['72%', '18%'],
        opacity: direction < 0 ? 0 : 1,
        visibility: direction < 0 ? 'hidden' : 'visible',
        height: '60vh',
        width: '22vw',
        transition: {
            // delay: ,
            duration: 0.7,
        },
    }),

}

export const secondItem = {
    initial: (direction: number) => ({
        right: direction < 0 ? ['18%', '72%'] : ['18%', '-6%'],
        opacity: 1,

        height: direction < 0 ? ['60vh', '100vh'] : '60vh',
        width: direction < 0 ? ['22vw', '30vw'] : '22vw',

    }),
    middle: {},
}


export const thirdItem = {
    initial: (direction: number) => ({
        right: direction < 0 ? ['-6%', '18%'] : ['-6%', '-30%'],
        height: '60vh',
        width: '22vw',

    }),
    middle: {},
}


export const fourthItem = {
    initial: (direction: number) => ({
        right: direction < 0 ? ['-30%', '-6%'] : ['-30%', '-54%'],
        height: '60vh',
        width: '22vw',

    }),
    middle: {

    },
};

export const fifthItem = {
    initial: (direction: number) => ({
        visibility: 'hidden',
        right: direction < 0 ? ['-54%', '-30%'] : ['100%', '100%'],
        height: direction < 0 ? '60vh' : ['60vh', '94vh'],
        width: direction < 0 ? '22vw' : ['22vw', '30vw'],

        // transition: {
        //     // delay: 1,
        //     duration: 3,
        // },
    }),
    middle: (direction: number) => ({
        visibility: 'visible',
        right: direction < 0 ? ['-30%', '-30%'] : ['100%', '70%'],
        height: direction < 0 ? '60vh' : ['94vh', '100vh'],
        width: direction < 0 ? '22vw' : ['22vw', '30vw'],
        transition: {
            // delay: 0.1,
            duration: 0.6,
        },
        // transition: {
        //     delay: 2,
        //     duration: 0.5,
        // },
    }),
};

// Image Variants 


export const firstImageItamVariant = {

    hidden: {
        display: 'none',
        transition: {
            delay: 1,
            duration: 0.5,
            // ease: 'ease'
        },


    },

    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        rotateZ: 16,
        transition: {
            delay: 1,
            duration: 1,
            // ease: 'ease'
        },
    },

};

export const secondImageItemVariant = {
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        rotateZ: 16,
        transition: {
            // delay: 1,
            duration: 0.5,
            // ease: 'ease'
        },
    },

    hidden: {
        y: '-450%',
        x: '-100%',
        opacity: 0.3,
        rotateZ: -130,
        transition: {
            // delay: 1,
            duration: 0.5,
            // ease: 'ease'
        },


    },
};


export const oneImageTwoVariant = {
    initial: (direction: number) => ({
        left: direction < 0 ? ['25%', '-40%'] : '25%',

        visibility: direction < 0 ? 'hidden' : 'visible',
        rotateZ: direction < 0 ? [16, -130] : [16, 70],
        transition: {
            delay: 0.3,
            duration: 0.5,
        },

    }),

    hidden: {},

    middle: (direction: number) => ({
        top: direction < 0 ? '120%' : ['40%', '120%'],
        transition: {
            delay: direction < 0 ? 1 : 0.4,
            duration: 0.5,
        },
    }),

    final: (direction: number) => ({
        left: direction < 0 ? ['-40%', '25%'] : '25%',


        transition: {
            delay: 0.5,
            duration: 0.5,
        },
    }),

}

export const TwoImageTwoVariant = {
    initial: (direction: number) => ({
        top: direction < 0 ? ['120%', '40%'] : '120%',
        rotateZ: direction < 0 ? [70, 16] : 70,
        left: '25%',

        opacity: 1,
        visibility: 'visible',
        transition: {
            delay: 0.5,
            duration: 0.5,
        },

    }),

    hidden: {

    },

    middle: {},

    final: {},
}


export const fiveImageTwoVariant = {
    initial: (direction: number) => ({
        left: direction < 0 ? '25%' : ['25%', '-40%'],
        top: direction < 0 ? ['120%', '40%'] : '120%',
        rotateZ: direction < 0 ? [70, 16] : -130,

        visibility: 'visible',


        transition: {
            delay: 0.5,
            duration: 0.5,
        },
    }),
    hidden: (direction: number) => ({
        top: direction < 0 ? '40%' : ['120%', '40%'],
        transition: {
            delay: direction < 0 ? 1 : 0.4,
            duration: 0.5,
        },
    }),
    middle: {},
    final: (direction: number) => ({
        left: direction < 0 ? '25%' : ['-40%', '25%'],

        visibility: 'visible',
        rotateZ: direction < 0 ? [70, 16] : [-130, 16],
        transition: {
            delay: 0.3,
            duration: 0.5,
        },

    }),






};