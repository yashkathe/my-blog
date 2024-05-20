import { createContext } from "react";

const variantsStore = {

    searchTextVariants: {
        initial: {
            opacity: 0,
            y: -70
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        exit: {
            y: -110,
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    },

    backdrop: {
        initial: {
            opacity: 0,
            transition: {
                duration: 1
            }
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
    },

    scale: {
        scale: 1.1
    }
};


const variantsCtx = createContext(variantsStore);

export default variantsCtx;