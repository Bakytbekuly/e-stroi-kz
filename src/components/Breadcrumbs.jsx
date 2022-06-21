import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

export const Text = styled.span`
  
  align-items:center;
  font-size: 17px;
  color: #636363;
  border:2px solid #ABABAB;
  border-radius:10px;
  padding:5px;
  margin-right:10px;
  background-color:white;
  margin-left:10px;


`
export const Breadcrumb = styled(Link)`
  font-size: 17px;
  color: #636363;
  text-decoration:none;
  border:2px solid #ABABAB;
  border-radius:10px;
  padding:5px;
  align-items:center;
  margin-right:10px;
  background-color:white;
  margin-left:10px;



`
export const Arrow = styled.div`
  display:inline-block;
  width: 0;
	height: 0;
	border-top: 5px solid transparent;
	border-left: 10px solid rgb(102,192,93);
	border-bottom: 5px solid transparent;
  margin-left:8px;
  margin-right:15px;
  
`

export const Breadcrumbs = ({ links }) => {
  // console.log(links);
  return (
    links.map((link, index) => {

      if (index < links.length - 1) {
        return (
          <>
            <Breadcrumb to={link.to} key={index}>
              {link.label === "Главная" || false ? <HomeTwoToneIcon fontSize="small" style={{ color: "rgb(102,192,93)" }} /> : false}
              {link.label}<span style={{ display: "inline-block", marginTop: "5px" }}><Arrow /></span>
            </Breadcrumb>

          </>
        )
      }
      return <Text>{link.label}< Arrow /></Text>
    })
  )
}
