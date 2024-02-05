import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_KEY ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "";
console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)

function Emailjs(e:any) {

   const response =  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result: any) => {
        console.log(result.text);
      }, (error: any) => {
        console.log(error);
      });

      return response;
};
export default Emailjs  