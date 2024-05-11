import PropTypes from 'prop-types';

const ReusableForm = ({ handleSubmit, submitBtnText = "Submit", children }) => {
 
    const handleLocalSubmit = e =>{
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        handleSubmit(data);

    }

  return (
    <div>
      <div className="my-40">
        {children}
        <form onSubmit={handleLocalSubmit} className="m-5 p-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input type="submit" value={submitBtnText} className="btn" />
        </form>
      </div>
    </div>
  );
};

ReusableForm.propTypes = {
  formTitle: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitBtnText: PropTypes.string,
  children: PropTypes.node
};

export default ReusableForm;
