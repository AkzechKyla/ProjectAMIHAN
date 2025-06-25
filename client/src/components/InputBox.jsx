function InputBox({ label, type, name }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                name={name}
                // value={value}
                // onChange={onChange}
                required
                readOnly={name !== "precipitation"}
                className="w-full px-3 py-2 border rounded bg-white focus:outline-none"
            />
        </div>
    )
}

export default InputBox;
