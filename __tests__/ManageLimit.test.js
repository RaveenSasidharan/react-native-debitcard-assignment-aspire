import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ManageLimit from "../screens/ManageLimit";
import { Strings } from "../resources/Strings";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("ManageLimit", () => {
  it("renders correctly", () => {
    const store = mockStore({
      cardDetails: {
        debitCard: null,
        loading: false,
        error: null,
      },
      spendingLimit: {
        spendingLimit: 3000,
      },
    });

    render(
      <Provider store={store}>
        <ManageLimit />
      </Provider>
    );

    expect(screen.getByText(Strings.spendingLimit)).toBeTruthy();
    expect(screen.getByText(Strings.weeklyCardLimit)).toBeTruthy();
    expect(screen.getByText(Strings.weeklyCardLimitDesc)).toBeTruthy();
    expect(screen.getByText(Strings.save)).toBeTruthy();
  });

  it("suggested amount buttons work correctly", () => {
    const screen = render(<ManageLimit />);

    const amountInput = screen.getByTestId("amountText");

    fireEvent.press(screen.getByText(Strings.dollar5k));
    expect(amountInput.props.value).toBe("5000");

    fireEvent.press(screen.getByText(Strings.dollar10k));
    expect(amountInput.props.value).toBe("10000");

    fireEvent.press(screen.getByText(Strings.dollar20k));
    expect(amountInput.props.value).toBe("20000");
  });
});
