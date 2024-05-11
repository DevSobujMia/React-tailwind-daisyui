import Grandpa from "../Grandpa/Grandpa";
import Navbar from "../Navbar/Navbar";
import ReusableForm from "../ReusableForm/ReusableForm";
import SimpleForm from "../SimpleForm/SimpleForm";

const Home = () => {
  const handleSignUpSubmit = (data) => {
    console.log("sign up", data);
  };

  const handleProfileUpdate = (data) => {
    console.log("Profile Update", data);
  };

  return (
    <div>
      <Navbar></Navbar>
      <Grandpa></Grandpa>
      <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}
      >
        <div>
            <h2>Sign Up</h2>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit={handleProfileUpdate}
      >
        <div>
            <h2>Profile Update</h2>
        </div>
      </ReusableForm>
      <SimpleForm></SimpleForm>
    </div>
  );
};

export default Home;
