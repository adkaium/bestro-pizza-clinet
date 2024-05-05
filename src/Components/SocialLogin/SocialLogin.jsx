import {useContext} from "react";
import {FaGoogle} from "react-icons/fa";
import {AuthContext} from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
  const {signwithGoogle} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigat = useNavigate()
  const handleGoogleSignIn = () => {
    signwithGoogle()
    .then(result =>{
      console.log(result.user)
      const userInfo ={
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res=>{
        console.log(res.data);
        navigat('/')
      })
    })
  };
  return (
    <div className="m-4">
      <button onClick={handleGoogleSignIn} className="btn">
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
