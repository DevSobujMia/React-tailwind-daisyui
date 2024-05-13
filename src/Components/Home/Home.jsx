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
      <h2 className="m-10 text-2xl">Prop Drilling & Context api</h2>
      <Grandpa></Grandpa>
      <h2 className="text-2xl mt-32">Reusable Form</h2>
      <div className="flex justify-evenly">
        <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
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
      </div>
      <SimpleForm></SimpleForm>
    </div>
  );
};

export default Home;
