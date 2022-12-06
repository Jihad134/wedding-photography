import React, { useContext } from 'react';
import {FaGithub, FaGoogle} from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from"firebase/auth"
import { AuthProvider } from '../../AuthContext/AuthContext';
import useTitle from '../../Pages/usetitle/Usetitle';
import toast from 'react-hot-toast';


const Login = () => {

 useTitle("Login")
 const location=useLocation()
 const from=location?.state?.from?.pathname ||'/'
 const navigate=useNavigate()
  const{login,googlepopUp,githHublogin,setLoading}=useContext(AuthProvider)
  const loginhendelar=(event)=>{
    event.preventDefault()
    const form=event.target
    const email=form.email.value
    const password=form.password.value
    console.log(email,password)
    login(email,password)
    .then(result=>{
      const user=result.user
      console.log(user)
      toast.success("Login successfully")
      navigate(from,{replace:true})
      // const currentUser={
      //   email:user?.email
      // }
      // fetch('https://assignment-11-server-plum.vercel.app//jwt',{
      //   method:"POST",
      //   headers:{
      //     'content-type':"application/json"
      //   },
      //   body:JSON.stringify(currentUser)
      // })
      // .then(res => res.json())
      // .then(data =>{
      //   console.log(data)
      // })
    })
    .catch(err=>{console.error(err)
    toast.error(err.message)}
    )
    .finally(()=>{
      setLoading(false)
    })
    
  }
  
  const googleProvider=new GoogleAuthProvider()
  const googleSinin=()=>{
    googlepopUp(googleProvider)
    .then(result=>{
      const user=result.user
      console.log(user)
    })
    .catch(err=>console.error(err))
  }
  const gitHubprovider=new GithubAuthProvider()
  const gitHubSinin=()=>{
    githHublogin(gitHubprovider)
    .then(result=>{
      const user=result.user
      console.log(user)
    })
    .catch(err=>console.error(err))
  }
    return (
      <div className="hero  bg-base-200">
    
        <div className="card  shadow-2xl bg-base-100 my-14">
          <form onSubmit={loginhendelar} className="card-body px-12">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" name='email' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" />
              <label className="label">
                <Link to='/register'  className="label-text-alt link link-hover">Have a New! Please Register</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="form-control mx-7 my-3">
              <button onClick={googleSinin} className="btn btn-primary"><FaGoogle className='font-bold text-3xl justify-start mr-7'></FaGoogle>Google sign In</button>
            </div>
          <div className="form-control mx-7 my-3">
              <button onClick={gitHubSinin} className="btn btn-primary"><FaGithub className='font-bold text-3xl justify-start mr-7'></FaGithub>Github sign In</button>
            </div>
        </div>
      
    </div>
    );
};

export default Login;