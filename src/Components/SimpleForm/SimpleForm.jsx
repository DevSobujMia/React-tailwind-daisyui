import useInputState from "../Hooks/useInputState";

const SimpleForm = () => {
  const emailState = useInputState("");

  const handleSubmit = (e) => {
    console.log("form data", emailState.value);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-40">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />
        <input
          {...emailState}
          type="email"
          name="email"
          placeholder="Your Email"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />
        <input type="submit" value="Submit" className="btn" />
      </form>

                   {/* form end */}
                   
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>

      <img
        className="mask mask-heart"
        src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
      />

      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleForm;
