import TextInput from "@components/TextInput";
import Modal from "../components/Modal";
import useModal from "../hook/useModal";
import TextArea from "@components/TextArea";
import { useState, ChangeEvent,MouseEventHandler} from "react";


import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';
export default function ContactUs() {
  const { closeModal, isOpen ,openModal} = useModal();
 

	// const [state1, setState1] = useState();
  const [state1, setState1] = useState<string>('');

  const handleState1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setState1(e.target.value);
  };
	const [state2, setState2] =useState<string>('');
  const handleState2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setState2(e.target.value);
  };
	const [state3, setState3] = useState<string>('');
  const handleState3Change = (e: ChangeEvent<HTMLInputElement>) => {
    setState3(e.target.value);
  };
	const [state4, setState4] = useState<string>('');
  const handleState4Change = (e: ChangeEvent<HTMLInputElement>) => {
    setState4(e.target.value);
  };
	const [state5, setState5] = useState<string>('');
 
  const handleState5Change = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState5(e.target.value);
  };

  

//   const sendEmail =async () =>
//   try {

// 		if(state1 && state2 && state3 && state4 && state5 )
// 		{
// 		let l = [];
// 		l.push("First Name :"+state1);
// 		l.push("Last Name: "+state2);
// 		l.push("Email ID: "+state3);
// 		l.push("Company Name :"+state4);
// 		l.push("Message:"+state5);
		
// 		console.log("array", l);
// 		const recipients = ['prabhakar.mathiyalagan@bosonlabs.net', 'immutablesigma@gmail.com'];
// 		const config = {
// 			SecureToken : "f86df774-d4f9-43a4-a978-4d4c5fab833a",
// 			To : recipients,
// 			From : 'immutablesigma@gmail.com',
// 			Subject : "Sigma Compliance",
//       Body: l.join("<br />"),
// 		};
//     if (window.Email) {
//       const result = await window.Email.send(config);
//       if (result === "OK") {
//         toast.success("Form submitted");
//         return true; // Indicate success
//       } else {
//         toast.error(result);
//         return false; // Indicate failure
//       }
//     }
// 	}
// 	else
// 	{
// // Handle case when not all fields are filled
// let errorMessage = "Please fill in the following fields:\n";
// if (!state1) errorMessage += "- First Name\n";
// if (!state2) errorMessage += "- Last Name\n";
// if (!state3) errorMessage += "- Email ID\n";
// if (!state4) errorMessage += "- Company Name\n";
// if (!state5) errorMessage += "- Message\n";

// toast.error(errorMessage);
// 	}
// 	}catch (error) {
//     console.error(error);
//     toast.error("An error occurred while submitting the form.");
//     return false; // Indicate failure
//   }
// }


const sendEmail = async () => {
  try {
    if (state1 && state2 && state3 && state4 && state5) {
      let l = [];
      l.push("First Name :" + state1);
      l.push("Last Name: " + state2);
      l.push("Email ID: " + state3);
      l.push("Company Name :" + state4);
      l.push("Message:" + state5);

      const recipients = ['immutablesigma@gmail.com'];
      const config = {
        SecureToken: "f86df774-d4f9-43a4-a978-4d4c5fab833a",
        To: recipients,
        From: 'immutablesigma@gmail.com',
        Subject: "Sigma Compliance",
        Body: l.join("<br />"),
      };
      if ((window as any).Email) {
        const result = await (window as any).Email.send(config);
        if (result.includes("OK")) {
          // toast.success("Form submitted");
          return true; // Indicate success
        } else {
          toast.error(result);
          return false; // Indicate failure
        }
      } 
    } else {
      // Handle case when not all fields are filled
      let errorMessage = "Please fill in the following fields:\n";
      if (!state1) errorMessage += "- First Name\n";
      if (!state2) errorMessage += "- Last Name\n";
      if (!state3) errorMessage += "- Email ID\n";
      if (!state4) errorMessage += "- Company Name\n";
      if (!state5) errorMessage += "- Message\n";

      toast.error(errorMessage);
      return false; // Indicate failure
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while submitting the form.");
    return false; // Indicate failure
  }
};
const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
  e.preventDefault();
  const emailSentSuccessfully = await sendEmail();

  // Open success modal only if the email is sent successfully
  if (emailSentSuccessfully) {
    openModal("SuccessModal");
  }
};
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // Add any form validation logic here if needed

  //  // Send email
  // const emailSentSuccessfully = await sendEmail();

  // // Open success modal only if the email is sent successfully
  // if (emailSentSuccessfully) {
  //   openModal("SuccessModal");
  // }
  // };
  return (
    <Modal isOpen={isOpen("ContactUs")} onClose={closeModal}>
      <Modal.Content className="!rounded-2xl !top-[4%] !max-w-3xl">
        <div className="relative grid gap-4">
      
          <button
            className="border-[2px] border-black h-7 w-7 xl:h-8 xl:w-8 rounded-full flex justify-center items-center absolute right-0"
            onClick={closeModal}
          >
            <img
              src="/svg/close.svg"
              alt=""
              className="w-2 h-2 xl:w-3 xl:h-3"
            />
          </button>
          <div className="px-4 py-4 md:px-10 md:py-8 xl:px-14 xl:py-10 grid gap-10 max-h-[90vh] overflow-y-scroll scrollbar-hide">
            <h1 className="text-black font-bold text-lg sm:text-xl md:text-2xl xl:text-4xl">
              Contact Us
            </h1>

            <form className="grid gap-5" >
              <TextInput
                label="First Name"
                placeholder="Enter your first name"
                // value={state1}
                onChange={handleState1Change}
                // required
              />
              <TextInput label="Last Name" 
              placeholder="Enter your last name" 
            // value={state2}
            onChange={handleState2Change}/>
              <TextInput
                label="Email"
                placeholder="Enter your email"
                // @ts-ignore
                type="email"
                value={state3}
							onChange={handleState3Change}
              />
              <TextInput
                label="Company Name"
                placeholder="Enter your company name"
                // value={state4}
                onChange={handleState4Change}
              />
              <TextArea label="Message" placeholder="Enter your message" 
              // value={state5}
							onChange={handleState5Change}
              />
              {/* <button
                className="border-[1px] border-black bg-black border-solid px-6 py-2 md:px-6 md:py-3 xl:px-8 xl:py-3 font-medium text-white mt-4 text-xs md:text-sm xl:text-lg"
                type="submit"
              >
                Submit
              </button> */}
          <button
  className="border-[1px] border-black bg-black border-solid px-6 py-2 md:px-6 md:py-3 xl:px-8 xl:py-3 font-medium text-white mt-4 text-xs md:text-sm xl:text-lg"
  type="submit"
  onClick={handleSubmit}
>
  Submit
</button>
            </form>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}
