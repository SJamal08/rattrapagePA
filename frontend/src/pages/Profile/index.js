import React, { useState } from 'react'

function Profile() {

    const [user, setUser] = useState(localStorage.getItem("token"))

    return (
        <div>
            <h2>Profile page token: {user}</h2>

            {/* <ExerciseList /> */}
            {/* <TextBlockPres /> */}
        </div>
    )
}

export default Profile
