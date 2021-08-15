import { fireEvent } from "@testing-library/react";
import Header from './';

it("should render Header component in log out state correctly", () => {
  const mockLogin = jest.fn();
  const mockLogout = jest.fn();

  const {getByText} = render(
    <Header 
      session={null} 
      handleLogin={mockLogin} 
      handleLogout={mockLogout}
    />
  );

  const loginBtn = getByText("Dołącz do nas");
  expect(loginBtn).toBeInTheDocument();
  
  fireEvent.click(loginBtn);
  expect(mockLogin).toHaveBeenCalled();
});

it("should render Header component in logged in state correctly", () => {
  const mockLogin = jest.fn();
  const mockLogout = jest.fn();

  const {getByText} = render(
    <Header 
      session={{}} 
      handleLogin={mockLogin} 
      handleLogout={mockLogout}
    />
  );

  const loginBtn = getByText("Wyloguj się");

  expect(loginBtn).toBeInTheDocument();
  expect(getByText("mój panel")).toBeInTheDocument();
  
  fireEvent.click(loginBtn);
  expect(mockLogout).toHaveBeenCalled();
});
