import { Outlet } from "react-router";

export default function Profile() {
    return (
        <div>
            <h1>You've landed on the profile page!</h1>
            <p>Try navigating around :)</p>
            <hr />
            <h2>The profile is visited by:</h2>
            <Outlet />
        </div>
    );
}