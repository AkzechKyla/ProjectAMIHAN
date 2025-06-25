function InputBox({ label, type, value, name, setFormData, smallText = false }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <div>
            <label className="block text-sm font-medium text-[--primary-blue] mb-2">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                required
                readOnly={name !== "precipitation"}
                className="w-full px-3 py-2 rounded-md bg-gray-100 text-gray-500 text-xs"
            />
            {
                smallText && <p className="text-gray-400 text-xs mt-2">{smallText}</p>
            }
        </div>
    )
}

export default InputBox;
