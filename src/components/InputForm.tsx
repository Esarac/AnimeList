import React from 'react'

interface Props{
    setter: (value: string) => void
    fieldName: string
    fieldId: string
    fieldType: string
    className?: string
}

function InputForm(props: Props) {
    return (
        <div className={props.className}>
            <label form={props.fieldId}>{props.fieldName}</label>
            <input
                type={props.fieldType}
                className="form-control"
                id={props.fieldId}
                placeholder={`Enter the ${props.fieldName}`}
                onChange={(v) => props.setter(v.target.value)} />
        </div>
    )
}

export default InputForm