import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import bgImg from "../../assets/others/authentication2.png";
import {useContext, useEffect, useRef, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../provider/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const LogIn = () => {
   const captachRef = useRef(null);
   const [setDisable] = useState(true);
   const location = useLocation();
   const from = location.state?.from?.pathname|| '/';
   console.log(from);

  const {logIn} = useContext(AuthContext);
  useEffect(()=>{
    loadCaptchaEnginge(8);
  },[])
  const navigation = useNavigate()
  const logInHadel = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);
    logIn(email, pass)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigation(from)
    });
  };

  const handleCaptcha = () =>{
     const captchValue = captachRef.current.value;
     if(validateCaptcha(captchValue)){
         setDisable(false)
     }else{
       setDisable(true)
     }
   }

  return (
    <div className="hero min-h-screen  bg-[url('../../assets/others/authentication.png'')] mt-4 shadow-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div>
            <img src={bgImg} alt="" />
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={logInHadel} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                placeholder="Please Enter Above Captach"
                name="captach"
                ref={captachRef}
                className="input input-bordered"
                required
              />
              <button
                onClick={handleCaptcha}
                className="btn btn-outline btn-xs"
              >
                Validate
              </button>
            </div>

            <div className="form-control mt-6">
              <input
                disabled={false}
                type="submit"
                value="LogIn"
                className="btn btn-primary"
              />
            </div>
            <Link to="/signup" className="label-text-alt link link-hover">
              New Here? Create New Account.
            </Link>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
