import Input from "@/components/atoms/input";
import Textarea from "@/components/atoms/textarea";
import Button from "@/components/atoms/button";
import { sendEmail } from "@/app/actions/send-email";


export default function Form() {
    return (
        // noValidate
        <form action={sendEmail} className="w-110 flex flex-col gap-8 max-md:w-full max-md:px-6">
            <Input type="text" name="name" placeholder="NAME" />
            <Input type="email" name="email" placeholder="EMAIL" />
            <Textarea name={"message"} rows={5} cols={30} placeholder="MASSAGE" />
            <div className="w-full flex justify-end">
                <Button type="submit" >SEND</Button>
            </div>
        </form>
    );
}