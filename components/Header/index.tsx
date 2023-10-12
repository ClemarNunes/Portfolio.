import styles from './header.module.css';
import Link from 'next/link';


const Header = () => {
    return(
        <nav>
            <div className={styles.Container}>
                <ul>
                    <li className={styles.divisao}><Link className={styles.al} href='/'>Home</Link></li>
                    <li className={styles.divisao}> <Link href='/About'>About</Link> </li>
                    <li className={styles.divisao}> <Link href='/Projects'>Projects</Link> </li>
                    <li className={styles.divisao}> <Link href='/Skills'>Skills</Link> </li>
                    <li className={styles.divisao}> <Link href='/Contact'>Contact</Link> </li>
                </ul>
            </div>
        </nav>
    );
}


export default Header