import loginImg from "../assets/Images/login.webp"
import Template from "../componenets/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Find the perfect space for today, tomorrow, and beyond."
      description2="Rentals designed to future-proof your lifestyle."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login