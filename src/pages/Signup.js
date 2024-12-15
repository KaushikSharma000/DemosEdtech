import signupImg from "../assets/Images/signup.webp"
import Template from "../componenets/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join millions finding their perfect space with Rental!"
      description1="Find the perfect space for today, tomorrow, and beyond."
      description2="Rentals designed to future-proof your lifestyle."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup