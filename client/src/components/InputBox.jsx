function InputBox({ label, type, value, name, setFormData }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                required
                readOnly={name !== "precipitation"}
                className="w-full px-3 py-2 border rounded bg-white focus:outline-none"
            />
        </div>
    )
}

export default InputBox;
