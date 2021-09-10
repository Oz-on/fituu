import ConversationsList from ".";

it("should render ConversationsList with conversations correctly", () => {
  const {getByText} = render(
    <ConversationsList
      conversations={[
        {
          id: 1,
          description: "opis conversacji",
          participants: [
            {
              id: 1,
              email: "john.doe@gmail.com",
              firstName: "John",
              lastName: "Doe",
              profilePhoto: {
                url: "",
                expiresIn: "",
              }
            },
            {
              id: 2,
              email: "jane.doe@gmail.com",
              firstName: "John",
              lastName: "Doe",
              profilePhoto: {
                url: "",
                expiresIn: "",
              }
            },
            {
              id: 3,
              email: "jan.koealski@gmail.com",
              firstName: "Jan",
              lastName: "Kowalski",
              profilePhoto: {
                url: "",
                expiresIn: "",
              }
            },
          ],
          lastMessage: {
            id: 1,
            content: "Test message",
            author: 1,
            timestamp: new Date().toString(),
            attachment: null,
          }
        },
        {
          id: 2,
          description: "opis conversacji",
          participants: [
            {
              id: 4,
              email: "tom.doe@gmail.com",
              firstName: "Tom",
              lastName: "Doe",
              profilePhoto: {
                url: "",
                expiresIn: "",
              }
            },
            {
              id: 5,
              email: "filip.doe@gmail.com",
              firstName: "Filip",
              lastName: "Doe",
              profilePhoto: {
                url: "",
                expiresIn: "",
              }
            },
            {
              id: 6,
              email: "egon.kowalski@gmail.com",
              firstName: "Egon",
              lastName: "Kowalski",
              profilePhoto: {
                url: "",
                expiresIn: "",
              }
            },
          ],
          lastMessage: {
            id: 1,
            content: "Test message",
            author: 1,
            timestamp: "2021-09-02T13:13:58.516Z",
            attachment: null,
          }
        }
      ]}
    />
  );

  expect(getByText("John, John, Jan")).toBeInTheDocument();
  expect(getByText("Tom, Filip, Egon")).toBeInTheDocument();
});

it("should render ConversationsList when it is empty correctly", () => {
  const {getByText} = render(<ConversationsList conversations={[]}/>);

  expect(getByText("Brak otwartych konwersacji")).toBeInTheDocument();
});
