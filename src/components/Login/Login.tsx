import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormControls/FormControls';
import {maxLength, required} from '../../utils/validators';
import {connect} from 'react-redux';
import {loginTC} from '../../Redux/auth_reducer';
import {AppStateType} from '../../Redux/redux-store';
import {Navigate} from 'react-router-dom';
import styles from './../common/FormControls/FormControls.module.css'
import {getAuth} from '../../Redux/users-selectors';

export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = (props: any) => {
    const onSubmit = (formData: LoginFormType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.auth.isAuth) return <Navigate to={`/profile/${props.auth.id}`}/>

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const maxLength25 = maxLength(25)

const LoginForm = (props: InjectedFormProps<LoginFormType>) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'email'} component={Input} validate={[required, maxLength25]}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'password'} component={Input} type={'password'}
                       validate={[required, maxLength25]}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>Remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
            {props.error && <div className={styles.unauthorizedError}>
                {props.error}
            </div>
            }
        </form>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    auth: getAuth(state)
})

const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)
export default connect(mapStateToProps, {loginTC})(Login);