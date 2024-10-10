// styles.ts
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    background-color: #FF0000; // Cor do botão
    color: #FFFFFF; // Cor do texto
    border: none; // Sem borda
    border-radius: 5px; // Borda arredondada
    padding: 10px 15px; // Preenchimento
    cursor: pointer; // Cursor em forma de mão
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); // Sombra para efeito de profundidade
    transition: background-color 0.3s; // Transição para efeito hover

    &:hover {
        background-color: #D50000; // Efeito hover
    }
`;
