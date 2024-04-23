import FavoritosProvider from '../../contextos/Favoritos';
import Cabecalho from '../../components/cabecalho';
import Container from '../../components/container';
import { Outlet } from 'react-router-dom';
import Rodape from '../../components/rodape';

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;