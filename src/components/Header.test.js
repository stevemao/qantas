import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { mount } from "enzyme";
import { MemoryRouter, Link, Router } from "react-router-dom";
import createMemoryHistory from "history/createMemoryHistory";

test("it should contain two Links", () => {
  const header = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(header.find(Link).length).toEqual(2);
  expect(header.find("a").length).toEqual(2);
});

test('it should go to /faqs when "Learn more" button is clicked', () => {
  const history = createMemoryHistory();
  const header = mount(
    <Router history={history}>
      <Header />
    </Router>
  );

  expect(history.location.pathname).toEqual("/");
  header
    .find(Link)
    .at(1)
    .simulate("click", { button: 0 });

  expect(history.location.pathname).toEqual("/faqs");
});

test('it should back to / when "Home" button is clicked', () => {
  const history = createMemoryHistory();
  const header = mount(
    <Router history={history}>
      <Header />
    </Router>
  );

  expect(history.location.pathname).toEqual("/");
  header
    .find(Link)
    .at(1)
    .simulate("click", { button: 0 });
  expect(history.location.pathname).toEqual("/faqs");
  header
    .find(Link)
    .at(0)
    .simulate("click", { button: 0 });
  expect(history.location.pathname).toEqual("/");
});
