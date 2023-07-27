import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  // const { auth } = useAuthContext();
  // const navigate = useNavigate();
  // if (!auth.isAuth) {
  //   navigate('/customer');
  // }
  return (
    <div>
      <Header />
      <div className="w-full h-screen flex flex-row items-center justify-around">
        <div className="w-[50%] h-full flex justify-center align-center flex-col bg-[#64748b]">
          {/* <div className="border border-black mt-8"> */}
          <h1 className="text-center text-white leading-normal font-medium text-5xl">
            Welcome to <br /> The Developers Bank.
          </h1>
          {/* </div> */}
        </div>

        <div className="w-[50%] flex justify-center align-center flex-col">
          <div className="w-full mt-12">
            <img className="w-full h-full mx-4 align-center" src="/bank_img.jpg" alt="bank" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;