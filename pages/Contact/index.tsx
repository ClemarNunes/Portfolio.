import styles from './Contact.module.css'
import Form from '../../components/Form'

const Contact = () => {
    return (
        <div className={styles.Container}>

            <div className={styles.ContactArea}>
                <h1>CONTACT WITH ME</h1>
                <div className={styles.border}></div>

                <div className={styles.contactInformationArea}>

                    <div className={styles.contactInformationEmail}>
                        <div><img src="/assets/email2.png" height={'auto'} width={32} alt="" /></div>
                        <span>clemar_nunes@hotmail.com</span>
                    </div>

                    <div className={styles.contactInformation}>
                        <div><img src="/assets/telefone2.png" height={'auto'} width={35} alt="" /> </div>
                        <span>+44 07389833591</span>
                    </div>
                    <div className={styles.contactInformation}>
                        <div><img src="/assets/gps.png" alt="" height={'auto'} width={32} /></div>
                        <span style={{marginLeft: '24px'}}>London Uk</span>
                    </div>
                </div>

            </div>

            <div className={styles.FormArea}>
                <Form />
            </div>
        </div>
    );
}

export default Contact;