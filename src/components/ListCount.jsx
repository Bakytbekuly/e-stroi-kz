import React from 'react'
import styled from "@emotion/styled"


const ListItem = styled.div`
  display: flex;
  color:  black;
  justify-content: space-between;
  width:100%;
  height:100%;
  padding:0px;
  margin-bottom:5px;
  
`

export const ListCount = ({ count }) => {
    return (
        <ListItem>
            <div>{count.name}</div>
            <div
                style={{
                    display: "flex",
                    width: "25px",
                    height: "25px",
                    borderRadius: "16px",
                    backgroundColor: " #ABABAB",
                    justifyContent: "center",
                    alignItems: "center"
                }}>{count.childCount}</div>
        </ListItem>
    )
}
