export default function BenefitsCard({title, description}) {
    return (
        <div className="flex flex-col gap-3">
            <p className="body-lg text-neutral-950">{title}</p>
            <p className="body-md text-neutral-600">{description}</p>
        </div>
    );
}