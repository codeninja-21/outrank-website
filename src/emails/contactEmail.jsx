import { Html, Head, Body, Container, Heading, Text, Font } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactEmail({ name, email, message }) {
    return (
        <Html>
            <Tailwind>
                <Head>
                    <Font 
                        fontFamily="DM Mono"
                        fallbackFontFamily="Arial"
                        webFont={{
                            url: "https://fonts.gstatic.com/s/dmmono/v16/aFTU7PB1QTsUX8KYthqQBA.woff2",
                            format: "woff2",
                        }}
                        fontWeight={400}
                    />
                    <Font 
                        fontFamily="Clash Display"
                        fallbackFontFamily="Arial"
                        webFont={{
                            url: "https://outrank-fitness.vercel.app/fonts/ClashDisplay-Variable.woff2",
                            format: "woff2",
                        }}
                        fontWeight={700}
                    />
                </Head>
                <Body className="bg-neutral-950">
                    <Container className="px-8">
                        <Heading style={{fontFamily: "Clash Display", fontWeight: 700}} className="text-[52px] text-red-500">OUTRANK®</Heading>
                        <Heading style={{fontFamily: "Clash Display", fontWeight: 400}} className="text-[18px] text-neutral-100 mb-8">NEW MASSAGE</Heading>
                        <Text style={{fontFamily: "DM Mono", fontWeight: 400}} className="text-[14px] text-neutral-100">NAME : {name}</Text>
                        <Text style={{fontFamily: "DM Mono", fontWeight: 400}} className="text-[14px] text-neutral-100">EMAIL : {email}</Text>
                        <Text style={{fontFamily: "DM Mono", fontWeight: 400}} className="text-[14px] text-neutral-100">MESSAGE : {message}</Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}