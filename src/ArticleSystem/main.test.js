import React from "react";
import { mount } from "enzyme";
import ArticleSystem from "./index";
const flushPromises = require("flush-promises");
import { act } from "react-test-renderer";

describe("Article render  system", () => {
  it("should simply be rendered", async () => {
    const wrapper = await mount(<ArticleSystem />);
    await flushPromises();
    expect(wrapper.find("input").length).toEqual(1);
    wrapper.unmount();
  });
});
