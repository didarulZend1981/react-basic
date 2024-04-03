

const Login = () => {
  const handleLogin = (e) =>{
    e.preventDefault();
     const email =e.target.email.value;
     
    const password =e.target.password.value;
   
    console.log(email,password);
  }
  return (
    <div className="w-[40%] mx-auto min-w[500px] border-2 border-red-500 p-2 roun">
          <form onSubmit={handleLogin}>
                
                <div className="flex gap-2">
                    <p>Email</p>
                <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="flex gap-2">
                    <p>Password</p>
                    <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                
                <button type="submit" className="btn btn-primary">registration</button>
          </form>
    </div>
  );
};

export default Login;