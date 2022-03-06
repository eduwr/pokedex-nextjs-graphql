import { act, render } from "@testing-library/react";
import { NextPage } from "next";
import React from "react";

export const renderComponent = (
  Component: React.FunctionComponent | NextPage
) => {
  act(() => {
    render(<Component />);
  });
};
