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
