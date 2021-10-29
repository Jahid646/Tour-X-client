import { useContext } from "react";
import { Authcontext } from "../contex/AuthProvider";


const useAuth = () => {
  return useContext(Authcontext);
};

export default useAuth;