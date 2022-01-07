export const options = {
    background: {
        color: {
            value: "#2d2f39",
        },
        height:{
            value:"100vh"
        }
    },
    fpsLimit:30,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 100,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            }
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 1000,
            },
            value: 50,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 3,
        },
    },
    detectRetina: true,
}