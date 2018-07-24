import React from "react";
import ReactDOM from "react-dom";
import { initialState, stateUpdaters, Faqs, Right } from "./Faqs";
import { mount } from "enzyme";

it("does not select faq initially", () => {
  expect(initialState()).toEqual({
    selectedFaq: null
  });
});

it("selects faq", () => {
  const props = { faqs: [{ foo: "foo" }, { bar: "bar" }] };
  expect(stateUpdaters.selectIndex(null, props)(0)).toEqual({
    selectedFaq: {
      foo: "foo"
    }
  });

  expect(stateUpdaters.selectIndex(null, props)(1)).toEqual({
    selectedFaq: {
      bar: "bar"
    }
  });
});

it('shows "No question selected"', () => {
  const faqs = mount(<Faqs />);

  expect(faqs.text().includes("No question selected")).toBe(true);
});

it("displays the question", () => {
  const faqs = mount(
    <Faqs
      selectedFaq={{
        title: "Title",
        body: "Body"
      }}
    />
  );

  expect(faqs.contains(<h1>Title</h1>)).toBe(true);
  expect(faqs.contains(<div>Body</div>)).toBe(true);
});

it("displays all the questions to be on the right section", () => {
  const faqs = mount(
    <Faqs
      faqs={[
        {
          title: "Title",
          body: "Body"
        },
        {
          title: "foo",
          body: "bar"
        }
      ]}
    />
  );

  expect(faqs.find(Right).find("li").length).toBe(2);
});
