import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import ErrorBoundary from "../../Utils/ErrorBoundary";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


Enzyme.configure({ adapter: new Adapter() })


// it("renders an app with Load Hotels button", async () => {

//     const wrapper = Enzyme.mount(
//         <ErrorBoundary>
//             <App />
//         </ErrorBoundary>
//       );
//     console.log(wrapper)
//     // Button load hotels rendered
//     expect(wrapper.contains(<button>Load Hotels</button>)).toEqual(false);
// });
