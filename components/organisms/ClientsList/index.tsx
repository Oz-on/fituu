import styled from "styled-components";
import { Client } from "../../lib/useClients";
import ClientPreview from "../../molecules/ClientPreview";
import ClientPreviewLoader from "../../molecules/ClientPreviewLoader";

type Props = {
  clients: Array<Client>;
  loading: boolean;
};

const ClientsList = ({clients, loading}: Props) => {

  if (!clients || loading) {
    return (
      <div data-testID={"clientPreviewsLoaderContainer"}>
        {[0, 0, 0, 0].map(_ => (<ClientPreviewLoader />))}
      </div>
    )
  }
  if (clients.length === 0) {
    return <EmptyListContainer>
      <p className={"empty-text"}>Brak klientów</p>
    </EmptyListContainer>
  }
  return (
    <div>
      {clients.map(client => (
        <ClientPreview 
          id={client.id}
          firstName={client.firstName} 
          lastName={client.lastName} 
          profilePhoto={client.profilePhoto}
          handleEditCalendar={() => {}}
          handleMessageClick={() => {}}
          handleRemoveClick={() => {}}
        />
        )
      )}
    </div>
  )
};

export default ClientsList;

const EmptyListContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .empty-text {
    text-align: center;
  }
`;
