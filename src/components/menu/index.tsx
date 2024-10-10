import { ButtonIcon, Container, MenuItem } from "./styles";
import HomeIcon from "../../assets/home.png"; // Ícone para "Início"
import ShortsIcon from "../../assets/shorts.png"; // Ícone para "Shorts"
import SubscribeIcon from "../../assets/subscribe.png"; // Ícone para "Inscrições"
import BibliotecaIcon from "../../assets/biblioteca.png"; // Ícone para "Biblioteca"
import HistoryIcon from "../../assets/historico.png"; // Ícone para "Histórico"
import ProfileIcon from "../../assets/perfil.png"; // Ícone de perfil
import YourSearchIcon from "../../assets/search.png"; // Ícone para "Procurar Canais"
import EmAltaIcon from "../../assets/alta.png"; // Ícone para "Em Alta"
import ShoppingIcon from "../../assets/mall.png"; // Ícone para "Shopping"
import MusicaIcon from "../../assets/music.png"; // Ícone para "Música"
import FilmesIcon from "../../assets/movie.png"; // Ícone para "Filmes"
import AoVivoIcon from "../../assets/live.png"; // Ícone para "Ao Vivo"
import JogosIcon from "../../assets/game.png"; // Ícone para "Jogos"
import NoticiasIcon from "../../assets/news.png"; // Ícone para "Notícias"
import EsportesIcon from "../../assets/esportes.png"; // Ícone para "Esportes"
import AprenderIcon from "../../assets/aprender.png"; // Ícone para "Aprender"
import ProcurarCanaisIcon from "../../assets/procurar_canais.png"; // Ícone para "Procurar Canais"
import { useNavigate } from 'react-router-dom';

const items = [
  { name: 'Início', link: '/', icon: HomeIcon },
  { name: 'Shorts', link: 'shorts', icon: ShortsIcon },
  { name: 'Inscrições', link: 'subscriptions', icon: SubscribeIcon },
  { name: 'Biblioteca', link: 'library', icon: BibliotecaIcon },
];

const explorarItems = [
  { name: 'Em Alta', icon: EmAltaIcon },
  { name: 'Shopping', icon: ShoppingIcon },
  { name: 'Música', icon: MusicaIcon },
  { name: 'Filmes', icon: FilmesIcon },
  { name: 'Ao Vivo', icon: AoVivoIcon },
  { name: 'Jogos', icon: JogosIcon },
  { name: 'Notícias', icon: NoticiasIcon },
  { name: 'Esportes', icon: EsportesIcon },
  { name: 'Aprender', icon: AprenderIcon },
];

interface IProps {
  openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
  const navigate = useNavigate();

  return (
    <Container openMenu={openMenu}>
      {items.map((item) => (
        <MenuItem key={item.name} openMenu={openMenu} onClick={() => navigate(item.link)}>
          <ButtonIcon alt='' src={item.icon} />
          {openMenu ? <span>{item.name}</span> : <span style={{ marginTop: '5px', fontSize: '12px' }}>{item.name}</span>}
        </MenuItem>
      ))}
      
      <hr style={{ margin: '5px 0', border: '1px solid #ccc', width: '100%' }} /> 

      {openMenu && (
        <>
          <MenuItem key='Histórico' openMenu={openMenu} onClick={() => navigate('history')}>
            <ButtonIcon alt='' src={HistoryIcon} />
            <span>Histórico</span>
          </MenuItem>

          <hr style={{ margin: '5px 0', border: '1px solid #ccc', width: '100%' }} />

          <div style={{ padding: '10px', textAlign: 'center', fontSize: '14px', color: '#555' }}>
            Faça login para curtir vídeos, comentar e se inscrever
          </div>

          <MenuItem 
            key='Fazer Login' 
            openMenu={openMenu} 
            style={{ marginTop: '10px', justifyContent: 'flex-start' }} 
            onClick={() => {/* Lógica para fazer login */}}
          >
            <ButtonIcon alt='' src={ProfileIcon} />
            <span style={{ marginLeft: '10px' }}>Fazer Login</span>
          </MenuItem>

          <hr style={{ margin: '5px 0', border: '1px solid #ccc', width: '100%' }} />

          <div style={{ padding: '10px', textAlign: 'center', fontSize: '16px', color: '#333' }}>
            Explorar
          </div>

          {explorarItems.map((item) => (
            <MenuItem key={item.name} openMenu={openMenu} onClick={() => { /* Lógica de navegação */ }}>
              <ButtonIcon alt='' src={item.icon} />
              <span>{item.name}</span>
            </MenuItem>
          ))}

          <hr style={{ margin: '5px 0', border: '1px solid #ccc', width: '100%' }} />

          <MenuItem key='Procurar Canais' openMenu={openMenu} style={{ justifyContent: 'flex-start' }} onClick={() => { /* Lógica para procurar canais */ }}>
            <ButtonIcon alt='' src={YourSearchIcon} />
            <span style={{ marginLeft: '10px' }}>Procurar Canais</span>
          </MenuItem>

          <hr style={{ margin: '5px 0', border: '1px solid #ccc', width: '100%' }} />

          <div style={{ padding: '10px', textAlign: 'center', fontSize: '16px', color: '#333' }}>
            Mais do YouTube
          </div>
        </>
      )}
    </Container>
  );
}

export default Menu;
