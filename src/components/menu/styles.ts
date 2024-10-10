import styled from 'styled-components';

export const Container = styled.div<{ openMenu: boolean }>`
  width: ${({ openMenu }) => (openMenu ? '200px' : '70px')}; /* Largura ajustada */
  height: calc(100vh - 55px); /* Altura do menu */
  background-color: #ffffff; /* Fundo claro */
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  transition: width 0.3s ease; /* Transição suave */
  position: sticky;
  top: 55px;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
  width: auto; /* Largura automática para os itens do menu */
  min-height: 40px; /* Altura mínima */
  border-radius: 8px; /* Cantos arredondados */
  cursor: pointer;
  padding: 10px; /* Espaçamento interno */
  box-sizing: border-box;
  display: flex;
  align-items: center; /* Alinha os itens no centro */
  justify-content: center; /* Centraliza os itens */
  transition: background-color 0.2s ease; /* Transição de hover */

  &:hover {
    background-color: rgba(200, 200, 200, 0.2); /* Efeito de hover claro */
  }

  span {
    font-weight: 500; /* Peso da fonte */
    text-align: center; /* Alinhamento centralizado */
  }
`;

export const ButtonIcon = styled.img`
  width: 20px; /* Aumente o tamanho do ícone */
  height: 20px; /* Aumente a altura do ícone */
  margin-right: 10px; /* Margem à direita para afastar o ícone do texto */
  object-fit: contain; /* Garante que a imagem seja contida no espaço definido */
  transition: transform 0.2s ease; /* Transição de animação do ícone */

  ${MenuItem}:hover & {
    transform: scale(1.1); /* Animação de escala ao passar o mouse */
  }
`;
