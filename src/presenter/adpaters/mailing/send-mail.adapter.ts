import emailjs from "@emailjs/browser";

export interface Email {
  name: string;
  contact: string;
  email: string;
  description: string;
}

export class SendEmailAdapter {
	async sendEmail(params: Email): Promise<boolean> {
	    const templateEmailParams = {
	      from_name: `${params.contact} | ${params.name}`,
	      email: params.email,
	      message: params.description,
	    };
	
	    try {
	      await emailjs.send(
	        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
	        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
	        templateEmailParams,
	        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
	      );
	      
	      return Promise.resolve(true)
	    } catch (error) {
	      console.error("FAILED...", error);
	      return Promise.resolve(false)
	    }
  }
}