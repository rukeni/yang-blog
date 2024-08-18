import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import RootLayout from "@/app/(site)/layout";
import Loading from "@/app/(site)/loading";
import Page from "@/app/(site)/page";

test("Layout", () => {
  // render(<Page />)
  // render(<RootLayout>
  //   {/* <Page /> */}
  //   레이아웃
  // </RootLayout>)
  render(<Loading />);
  expect(screen.getByRole("status")).toBeDefined();
});
