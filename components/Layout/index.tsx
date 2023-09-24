import styles from './Layout.module.css'
import Header from '../Header'
import { ReactElement } from 'react'
 
 

type Props = {
    children: ReactElement;
}

export const Layout = ({ children }: Props) => {
    

    return(
        <div className={styles.Container}>
            <Header />
            
            <main className={styles.conteudo}>{children}</main>

            <footer className={styles.footer}>
                    <span>© 2023/ Clemar Nunes/Todos os direitos reservados</span>
            </footer> 
        </div>
    );
}


 