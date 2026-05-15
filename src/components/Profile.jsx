import { Outlet } from "react-router";
import { useParams } from "react-router";
import DefaultProfile from "./DefaultProfile";
import Popeye from "./Popeye";
import Spinach from "./Spinach";

// export default function Profile() {
//     return (
//         <div>
//             <h1>You've landed on the profile page!</h1>
//             <p>Try navigating around :)</p>
//             <hr />
//             <h2>The profile is visited by:</h2>
//             <Outlet />
//         </div>
//     );
// }

export default function Profile() {
    const { componentName } = useParams();
    
    return (
        <div>
            <h1>You've landed on the profile page!</h1>
            <p>Try navigating around :)</p>
            <hr />
            <h2>The profile is visited by:</h2>
            {name === 'popeye' ? (
                <Popeye />
            ) : name === 'spinach' ? (
                <Spinach />
            ) : <DefaultProfile />}
        </div>
    );
}