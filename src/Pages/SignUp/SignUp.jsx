import { Link, useNavigate } from "react-router-dom";
import bgImg from "../../assets/others/authentication2.png";
import {useForm} from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
   const {
     register,
     handleSubmit,
    //  watch,
    reset,
     formState: {errors},
   } = useForm();
   const axiosPublic = useAxiosPublic();
   const {createUser, upDatedeUser} = useContext(AuthContext);
   const navigate = useNavigate()



   const onSubmit = (data) =>{
     console.log(data)
     createUser(data.email, data.password)
     .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
        upDatedeUser(data.name, data.email, data.PhotoUrl)
        .then(()=>{
          console.log("profile is updated");
          // create user in database
          const userInfo ={
            name:data.name,
            email:data.email
          }
          axiosPublic.post('/users', userInfo)
          .then(res=>{
            if(res.data.insertedId){
               reset();
               Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: "Your work has been saved",
                 showConfirmButton: false,
                 timer: 1500,
               });
                navigate("/");
            }
          })
         
         
        })
        .catch(error=>console.log(error))
      }
     )
   };
  
    

    // console.log(watch("example"));
    return (
      <div className="hero min-h-screen  bg-[url('../../assets/others/authentication.png'')]">
        <div className="hero-content flex-col lg:flex-row-reverse mt-9">
          <div className="text-center lg:text-left">
            <div>
              <img src={bgImg} alt="" />
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-9">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="PhotoUrl"
                  {...register("photoUrl")}
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="email"
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
                  name="password"
                  {...register("password", {
                    required: true,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span>This field is required</span>
                )}
                {/* {
                  errors.password?.type === 'min' && <span>password must be 6 characters</span>
                } */}
                {/* {
                  errors.password?.type === 'max' && <span>password must be less than 20 characters</span>
                } */}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <Link to="/login" className="label-text-alt link link-hover">
                Alrady have an account? LogIn please.
              </Link>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default SignUp;