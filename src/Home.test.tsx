import { act, render, screen } from "@testing-library/react";
import App from "./App";

it("renders without crashing", async () => {
  render(<App />);
  await act(async () => {
    expect(await screen.findByText(/welcome to my app/i)).toBeVisible();
    expect(screen.queryByText(/Hello, U2/i)).not.toBeInTheDocument();
  });
});
