import { useState } from "react";

function Profile() {
    const [loggedIn, setLoggedIn] = useState(false)
    if (loggedin) {
        return (
            <div>
                <h1>Welcome Pradeep Kumar</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Welcome Guest</h1>
            </div>
        )
    }
}
export default App;