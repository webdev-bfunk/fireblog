import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Modal from "../../../utils/Modal";
import { useState } from "react";

const Auth = () => {
    const [ createUser, setCreateUser ] = useState(false);

  return (
    <Modal>
      <section className="z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadows">
        <button>
          <LiaTimesSolid />
        </button>
        <div className="flex flex-col justify-center items-center gap-[3rem]">
          <>
            <h2 className="text-2xl pt-[5rem]">{createUser ? "Join Medium" : "Welcome Back!"}</h2>
            <div className="flex flex-col gap-2 w-fit mx-auto">
              <Button
                icon={<FcGoogle className="text-xl" />}
                text={`${createUser ? "Sign Up" : "Sign In"} with Google`}
              />
              <Button
                icon={<MdFacebook className="text-xl text-blue-600" />}
                text={`${createUser ? "Sign Up" : "Sign In"} with Facebook`}
              />
              <Button
                icon={<AiOutlineMail className="text-xl" />}
                text={`${createUser ? "Sign Up" : "Sign In"} with Email`}
              />
            </div>
            <p>
                {createUser ? "Already have an account?" : "Don't have an Account?"}
                <button className="text-green-600 hover:text-green-700 font-bold ml-1"
                onClick={() => setCreateUser(!createUser)}>{createUser ? "Sign In" : "Create an Account"}</button>
            </p>
          </>
        </div>
      </section>
    </Modal>
  );
};

export default Auth;

const Button = ({ icon, text, click }) => {
  return (
    <button className="flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full ">
      {icon} {text}
    </button>
  );
};
