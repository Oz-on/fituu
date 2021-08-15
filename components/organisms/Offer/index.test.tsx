import Offer from './';

it("should render Offer component correctly", () => {
  const {getByText} = render(
    <Offer 
      name={"Offer 1"}
      price={300}
      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    />
  );

  expect(getByText('Offer 1')).toBeInTheDocument();
});
