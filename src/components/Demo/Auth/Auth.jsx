import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Modal from "../../../utils/Modal";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = ({ modal, setModal }) => {
    const [ createUser, setCreateUser ] = useState(false);
    const [signReq, setSignReq] = useState('');


    const hidden = modal ? "visible opacity-100" : "invisible opacity-0";

  return (
    <Modal modal={modal} setModal={setModal} hidden={hidden}>
      <section className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadows ${hidden} transition-all duration-500`}>
        <button 
        onClick={() => setModal(false)}
        className="absolute top-8 right-8 text-2xl hover:opacity-50">
          <LiaTimesSolid />
        </button>
        <div className="flex flex-col justify-center items-center gap-[3rem]">
          {signReq === "" ? (
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
              click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
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
          ) : signReq === "sign-in" ? (
            <SignIn setSignReq={setSignReq}/>
          ) : signReq === "sign-up" ? (
            <SignUp setSignReq={setSignReq}/>
          ): null}
          <p className="mx-auto text-xs md:w-[30rem] mb-[3rem] text-center">
            Click &quot;Sign In&quot; to agree to Medium&apos;s Terms of Service and <br />acknowledge that Medium&apos;s Privacy Policy applies to you.
          </p>
        </div>
      </section>
    </Modal>
  );
};

export default Auth;

const Button = ({ icon, text, click }) => {
  return (
    <button onClick={click} className="flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full ">
      {icon} {text}
    </button>
  );
};
