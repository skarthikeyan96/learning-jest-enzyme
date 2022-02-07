import { render, screen } from "@testing-library/react";
import App from "./App";
import { configure } from "enzyme";
import adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter });

// adapter for react 17: https://stackoverflow.com/questions/64658031/which-enzyme-adapter-works-with-react-17
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
