import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, required} from '../../utils/validators';
import {Textarea} from '../common/FormControls/FormControls';

export type DialogMessageType = {
    newMessage: string
}
type DialogFormPropsType = {
    addMessage: (newMessage: string) => void
}

export const DialogForm = (props: DialogFormPropsType) => {
    const onSubmit = (formData: DialogMessageType) => {
        props.addMessage(formData.newMessage)
    }

    return <DialogMessageFormRedux onSubmit={onSubmit}/>
}

export let maxlength5 = maxLength(5)

export const DialogMessageForm = (props: InjectedFormProps<DialogMessageType>) => {

    return (
        <form onSubmit={props.handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>
                <Field name={'newMessage'} placeholder={'Enter your message'} component={Textarea} validate={[required, maxlength5]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const DialogMessageFormRedux = reduxForm<DialogMessageType>({form: 'dialogNewMessage'})(DialogMessageForm)