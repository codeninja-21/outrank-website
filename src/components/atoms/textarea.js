export default function Textarea({ name, rows, cols, ...props }) {
    return (
        <textarea 
            name={name}
            rows={rows}
            cols={cols}
            className="text-neutral-100 border-b border-red-700 hover:border-red-500 focus:border-red-400 focus:outline-none"
            {...props}
        >
        </textarea>
    );
}