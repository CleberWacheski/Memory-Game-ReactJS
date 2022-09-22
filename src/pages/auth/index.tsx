import style from './style.module.css'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user'

const schema = yup.object({
    email: yup.string().required("Campo obrigatorio"),
    name: yup.string().required("Campo obrigatorio"),
})

interface FormProps {
    email: string;
    name: string;
}


export const Auth = () => {

    const navigation = useNavigate()
    const {CreateUser} = useContext(UserContext)

    const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
        resolver: yupResolver(schema)
    })

    const handleLoginWithMemoryGame: SubmitHandler<FormProps> = async (value, event) => {
        const { email, name } = value


        try {
            const {data} =  await api.post('/users', {
                name,
                email
            })


            CreateUser(data)
            navigation('/Home')
            
        }
        catch (err) {
            console.log(err)
            alert('Problemas no servidor ,tente mais tarde...')
        }

    }

    return (
        <div className={style.homeContainer}>
            <h1 className={style.title}>MEMORY GAME</h1>
            <form className={style.form} onSubmit={handleSubmit(handleLoginWithMemoryGame)}>
                <label htmlFor="email" className={style.label}>Digite seu e-mail</label>
                <input className={style.input} type='email'  {...register('email')} />
                <p className={style.inputError}>{errors.email?.message}</p>
                <label htmlFor="name" className={style.label}>Digite seu nome</label>
                <input className={style.input} type="text" {...register('name')} />
                <p className={style.inputError}>{errors.name?.message}</p>
                <button type='submit' className={style.play}>JOGAR</button>
            </form>
        </div>
    )
} 