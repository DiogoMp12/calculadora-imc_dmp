import styles from './StylesList.module.css';

const StylesList = () => {

    try {
    } catch (error) {
        console.error("erro no componente StylesList", error)

        return(
            <div>
                <p className={styles.itemError}>Ocorreu um erro ao carregar este componente.</p>
            </div>
        )
    }
}

export default StylesList;