import Input from "@/components/atoms/input";
import Textarea from "@/components/atoms/textarea";
import Button from "@/components/atoms/button";


export default function Form() {
    return (
        // noValidate
        <form action="" className="w-110 flex flex-col gap-8 max-md:w-full max-md:px-6">
            <Input type="text" placeholder="NAME" />
            <Input type="email" placeholder="EMAIL" />
            <Textarea name={"massage"} rows={5} cols={30} placeholder="MASSAGE" />
            <div className="w-full flex justify-end">
                <Button>SEND</Button>
            </div>
        </form>
    );
}