export default function Input({ type, required = true, ...props }) {
    return (
        <input 
            type={type || "text"}
            className="h-8 text-neutral-100 border-b border-red-700 hover:border-red-500 focus:border-red-400 focus:outline-none"
            required={required}
            {...props}
        />
    );
}