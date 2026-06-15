"use server";

import { Resend } from "resend";
import ContactEmail from "@/emails/contactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(fromData) {
    const name = fromData.get("name");
    const email = fromData.get("email");
    const message = fromData.get("message");

    console.log(name, email, message);
    
    await resend.emails.send({
        from: 'Outrank <onboarding@resend.dev>',
        to: "salah7server@gmail.com",
        subject: `massage from : ${name}`,
        react: (
            <ContactEmail 
                name={name}
                email={email}
                message={message}
            />
        )
    });
}