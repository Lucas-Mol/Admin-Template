interface AuthInputProps {
    label: string
    value: any
    required?: boolean
    rendered?: boolean
    type?: 'text' | 'email' | 'password'
    changeValue: (value: any) => void
}

export default function AuthInput({label, value, type, required, rendered, changeValue}: AuthInputProps) {
    if(!rendered) rendered = true

    return rendered ? (
        <div className="flex flex-col mt-4">
            <label 
            htmlFor="text-input">
                {label}
            </label>
            <input 
                id="text-input" 
                type={type ?? 'text'}
                value={value}
                onChange={e => changeValue?.(e.target.value)}
                required={required ?? false}
                className={`
                    px-4 py-3 mt-2 rounded-lg
                    bg-gray-950 focus:bg-gray-900 
                    border
                    border-gray-500 focus:border-blue-500 
                    focus:outline-none
                `}
                />
        </div>
    ) : null
}