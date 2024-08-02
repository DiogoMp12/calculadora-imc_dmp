import { useState, useEffect } from 'react';
import styles from '../styles-list/StylesList.module.css'; // Corrija o caminho se necessário

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        // O uso de `import` dinâmico não é necessário aqui, já que você está importando CSS de forma estática
        try {
            // Você pode adicionar código adicional se necessário
        } catch (e) {
            setErro('Erro ao carregar estilos.');
        }
    }, []);

    if (erro) {
        return <p>{erro}</p>;
    }

    const calcularIMC = () => {
        if (altura > 0) {
            const alturaEmMetros = altura / 100;
            return (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
        }
        return 0;
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1 className={styles.title}>Calculadora IMC</h1>
                <input
                    type="number"
                    placeholder="Peso em kg"
                    onChange={(evento) => setPeso(parseFloat(evento.target.value))}
                />
                <input
                    type="number"
                    placeholder="Altura em metros"
                    onChange={(evento) => setAltura(parseFloat(evento.target.value))}
                />
                <p>Seu IMC é: {calcularIMC()}</p>
            </form>
        </div>
    );
};

export default Formulario;
