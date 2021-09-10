import styled from "styled-components";
import { Client } from "../../lib/useClients";
import ClientPickerElement from "../../molecules/ClientPickerElement";

type Props = {
  clients: Array<Client>;
  onSelectClient: Function;
};

const ClientPicker = ({clients, onSelectClient}: Props) => {
  return (
    <Container>
      {
        clients.map(client => (
          <ClientPickerElement 
            firstName={client.firstName}
            lastName={client.lastName}
            profileImageUrl={client.profilePhoto.url}
            onClick={onSelectClient}
          />
        ))
      }
    </Container>
  )
};

export default ClientPicker;

const Container = styled.div`
  display: flex;

  > div {
    margin-right: 5px;
  }
`;
