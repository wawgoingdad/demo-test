import { render, screen } from "@testing-library/react";
import App from "../App";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("With React Testing Library", () => {
    const initialState = {
        authentication: { loading: false },
    };
    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
        store.clearActions();
    });

    it("App renders without crashing", () => {
        store = mockStore(initialState);
        const { container } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(container).toBeTruthy();
    });
});
