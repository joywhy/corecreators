import { useNavigate } from "react-router-dom";

export const navigateToPath =(path)=>{
    location.href =path;
    // useNavigate(path)
    // const url =  location.origin + path;
    // history.pushState(null,null,url);
  };