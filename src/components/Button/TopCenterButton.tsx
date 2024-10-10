// TopCenterButtons.tsx
import React from 'react';
import { ButtonContainer } from './styles'; // Certifique-se de que isso está correto

const TopCenterButtons = () => {
    const handleClick = (buttonName: string) => {
        console.log(`${buttonName} clicado`);
    };

    const buttonNames = [
        "Tudo",
        "Warzone",
        "Entretenimento",
        "Trap",
        "Rock",
        "Jogos",
        "Futebol",
        "Podcasts",
        "Saúde",
        "Notícias",
        "Clima",
        "The Prodigy",
        "GymArtistic",
        "Mundo",
        "Carros",
    ];

    return (
        <div style={{
            height: '35px',
            position: 'fixed',
            top: '60px',
            left: '55%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '30px', // Aumente o espaço entre os botões
        }}>
            {buttonNames.map((name, index) => (
                <ButtonContainer 
                    key={index} 
                    onClick={() => handleClick(name)} 
                    style={{ 
                        backgroundColor: '#9c9898', // Cor do botão
                        color: '#FFFFFF', // Cor do texto
                        border: 'none', // Sem borda
                        borderRadius: '5px', // Borda arredondada
                        padding: '10px 15px', // Preenchimento
                        cursor: 'pointer', // Cursor em forma de mão
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Sombra para efeito de profundidade
                        transition: 'background-color 0.3s', // Transição para efeito hover
                    }}
                >
                    <span>{name}</span>
                </ButtonContainer>
            ))}
        </div>
    );
};

export default TopCenterButtons;
