
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';
import useTitle from '../../Pages/usetitle/Usetitle';

const Register = () => {
  useTitle("Register")
    const {createUser,profileUpdate}=useContext(AuthProvider)
    const rigisterHandelar=(event)=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const phontoURL=form.Photo.value
        const email=form.email.value
        const password=form.password.value
        createUser(email,password)
        .then(Result=>{
            const user=Result.user
            console.log(user)
            profileAdd(name,phontoURL)
            toast.success("register successfully")
        })
        .catch(err=>{
          console.error(err)
        toast.error(err.message)
        })
    }
    const profileAdd=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL
        }
        profileUpdate(profile)
    }
    return (
        <div className="hero  bg-base-200">
 
    
    <div className="card  my-11  shadow-2xl bg-base-100">
      <form onSubmit={rigisterHandelar} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered " />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Photo" name='Photo' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <Link to='/login'  className="label-text-alt link link-hover">Have an Account! Please Login</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>

    );
};

export default Register;