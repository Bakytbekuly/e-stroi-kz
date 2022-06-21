import React from 'react'
import svg from "../svg/no-content.svg"
export const NotFoundPage = ({ message = "404" }) => {
    return (
        <div style={{ marginLeft: "200px" }}>
            <div>

                <img src={svg} />
                <h1 style={{ marginLeft: "50px" }}>{message}</h1>
            </div>



        </div>
    )
}
