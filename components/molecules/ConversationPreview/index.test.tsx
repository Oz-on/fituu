import ConversationPreview from ".";

it("should render ConversationPreview component correctly", () => {
  const mockClick = jest.fn();
  const {getByText} = render(
    <ConversationPreview
      onClick={() => {}}
      conversation={{
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
            firstName: "Jane",
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
          timestamp: "2021-09-04T13:13:58.516Z",
          attachment: null,
        }
      }}
    />
  );

  expect(getByText("John, Jane, Jan")).toBeInTheDocument();
  expect(getByText("Test message")).toBeInTheDocument();
});