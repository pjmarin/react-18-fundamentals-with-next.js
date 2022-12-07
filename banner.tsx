import { Children } from "react";
import styles from "./banner.module.css"; styles.nombredelaclase
// import { test } from "./banner.module.css"; // se puede utilizar asi <div className={test}>Prueba</div>

// const Banner = (props: { headerText: string }) => {
//     return(
//         <header className="row mb-4">
//             <div className="col-5">
//                 <img src="/globomantics.png" />
//             </div>
//             <div className={styles.test}>Prueba</div>
//             <div className="col-7 mt-5 test">
//                 {props.headerText}
//             </div>
//         </header>
        
//     );
// };

const Banner = ( props: { children: string }) => {
    return(
        <header className="row mb-4">
            <div className="col-5">
            </div>
            <div className={styles.test}>Prueba</div>
            <div className="col-7 mt-5 test">
                {props.children}
            </div>
        </header>
        
    );
};

export default Banner;