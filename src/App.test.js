import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders hero heading once content loads", async () => {
  render(<App />);
  await waitFor(() =>
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument()
  );
});
