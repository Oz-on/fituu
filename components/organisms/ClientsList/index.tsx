import styled from "styled-components";
import ClientPreview from "../../molecules/ClientPreview";

type Props = {
  clients: {
    id: number, 
    firstName: string, 
    lastName: string, 
    profilePhoto: {url: string}
  }[];
};

const ClientsList = ({clients}: Props) => {
  if (clients.length === 0) {
    return <EmptyListContainer>
      <p>Brak klientów</p>
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
  width: 100%;
  padding 20px;
  display: flex;
  justify-content: center;
  align-items:center;

  .empty-text {
    
  }
`;
