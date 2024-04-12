import {
  Container,
  Header,
  ListContainer,
  Card,
} from './styles';

import arrow from '../../assets/imagens/icons/arrow.svg';
import edit from '../../assets/imagens/icons/edit.svg';
import trash from '../../assets/imagens/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos </strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Luiz Henrique</strong>
              <small>instagram</small>
            </div>
            <span>luizhenriquejob4@gmail.com</span>
            <span>(21) 99637-8849</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Luiz Henrique</strong>
              <small>instagram</small>
            </div>
            <span>luizhenriquejob4@gmail.com</span>
            <span>(21) 99637-8849</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Luiz Henrique</strong>
              <small>instagram</small>
            </div>
            <span>luizhenriquejob4@gmail.com</span>
            <span>(21) 99637-8849</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
