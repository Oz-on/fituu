import { fireEvent } from "@testing-library/react";
import NewClientForm from ".";

it("should render NewClientForm component correctly", () => {
  const mockAddClient = jest.fn();
  const mockCancelClient = jest.fn();
  const {getByText} = render(
    <NewClientForm
      visible={true}
      handleAddClientClick={mockAddClient}
      handleCancelClick={mockCancelClient}
    />
  );

  expect(getByText("Podaj adres email klienta")).toBeInTheDocument();
});


it("should react on clicking buttons of NewClientForm component correctly", () => {
  const mockAddClient = jest.fn();
  const mockCancelClient = jest.fn();
  const {getByText} = render(
    <NewClientForm
      visible={true}
      handleAddClientClick={mockAddClient}
      handleCancelClick={mockCancelClient}
    />
  );

  fireEvent.click(getByText("Anuluj"));
  expect(mockCancelClient).toBeCalled();

  fireEvent.click(getByText("Dodaj"));
  expect(mockAddClient).toBeCalled();
});