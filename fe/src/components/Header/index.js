import { Container, InputSearchContainer, Span } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>
        My
        <Span>Contacts</Span>
      </h1>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar pelo nome... " />
      </InputSearchContainer>
    </Container>
  );
}
