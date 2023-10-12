import styles from './Form.module.css'
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const createUserFormSchema = z.object({
    name: z.string()
        .nonempty('Name is required'),
    email: z.string()
        .nonempty('Email is required'),
    Subject: z.string()
        .nonempty('Subject is Required'),
  

})

type CreateUserFormData = z.infer<typeof createUserFormSchema>
 

const Form = () => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [assuntoInput, setAssuntoInput] = useState('');
    // const [textArea, setTextArea] = useState(''); 
    const {register, handleSubmit, formState: {errors}} = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

    const handleSaveForm = () => {
        alert('enviado com sucesso')
        setNameInput('')
        setEmailInput('')
        setAssuntoInput('')
    }


    return(
        <main className={styles.Container}>

            <form className={styles.formArea} onSubmit={handleSubmit(handleSaveForm)}>
                <div className={styles.contato}><span>Contact</span></div>
                <div className={styles.camposArea}>
                
                    <input 
                        className={styles.input}
                        type="text"
                        value={nameInput}
                        placeholder='Enter your name'
                        {...register('name')}
                        onChange={e => setNameInput(e.target.value)}
                        autoComplete='off'
                    />
                    
                    <div className={styles.barra}></div>
                    <label htmlFor="name">Name:</label>
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                </div>
               

                <div className={styles.camposArea}>
                   
                    <input 
                        className={styles.input}
                        type="text"
                        value={emailInput}
                        placeholder='Enter your email'
                        {...register('email')}
                        onChange={e => setEmailInput(e.target.value)}
                        autoComplete='off'
                    />
                    <div className={styles.barra}></div>
                    <label htmlFor="email">Email:</label>
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                </div>
                

                <div className={styles.camposArea}>
                    <input 
                        className={styles.input}
                        type="text"
                        value={assuntoInput}
                        placeholder='Enter subject'
                        {...register('Subject')}
                        onChange={e => setAssuntoInput(e.target.value)}
                        autoComplete='off'
                    />
                    <div className={styles.barra}></div>
                    <label htmlFor="subject">Subject:</label>
                    {errors.Subject && <span className={styles.error}>{errors.Subject.message}</span>}
                </div>
               
               
                <div className={styles.message}>
                    
                    
                    <textarea   name="message" id="" cols={30} rows={10} placeholder='Enter your message here...'>
                            
                    </textarea>
                     
                  
                    
                  

                </div>
                
                

                <div className={styles.button}>
                    <button type='submit'>Send</button>
                </div>

            </form>
        </main>
    );
}


export default Form;