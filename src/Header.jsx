import styles from './header.module.css'


export const Header = () => {
    return (
        <header className={styles['ch-header']}>
            <img src="https://img.freepik.com/premium-photo/anime-girl_811396-10363.jpg" className={styles['ch-header__logo']} />

            Header
        </header>
    )
}

export default Header
