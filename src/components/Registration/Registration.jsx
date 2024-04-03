

const Registration = () => {
  const handleRegister = (e) =>{
    e.preventDefault();
    const name =e.target.name.value;
    const email =e.target.email.value;
    const Photo =e.target.photo.value;
    
    const password =e.target.password.value;
    const confirmPassword =e.target.confirmPassword.value;
    console.log(name,email,Photo,password,confirmPassword);
  }
  return (
    <div className="w-[40%] mx-auto min-w[500px] border-2 border-red-500 p-2 roun">
          <form onSubmit={handleRegister}>
                <div className="flex gap-2">
                    <p>Name</p>
                    <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="flex gap-2">
                    <p>Photo</p>
                    <input name="photo" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="flex gap-2">
                    <p>Email</p>
                    <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="flex gap-2">
                    <p>Password</p>
                    <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="flex gap-2">
                    <p>Confirm Password</p>
                    <input name="confirmPassword" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <button type="submit" className="btn btn-primary">registration</button>
          </form>
    </div>
  );
};

export default Registration;