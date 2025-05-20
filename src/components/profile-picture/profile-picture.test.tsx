import { expect, describe, it, vi } from "vitest";
import { ProfilePicture } from "./profile-picture";
import { render } from "@testing-library/react";

describe("Profile Picture Component", () => {
  it("renders correctly", () => {
    const { container } = render(<ProfilePicture />);
    expect(container).toBeVisible();
  });

  it("has correct alt text", () => {
    const { getByAltText } = render(<ProfilePicture />);
    expect(getByAltText("Profile Picture")).toBeVisible();
  });

  it("has correct diameter", () => {
    const { getByRole } = render(<ProfilePicture />);

    expect(getByRole("img")).toHaveAttribute("width", "100");
    expect(getByRole("img")).toHaveAttribute("height", "100");
  });

  it("is circle", () => {
    const { getByAltText } = render(<ProfilePicture />);
    expect(getByAltText("Profile Picture")).toHaveClass("rounded-full");
  });

  it.each([10, 100, 300, 444])(
    "has correct diameter: %i",
    (diameter: number) => {
      const { getByRole } = render(<ProfilePicture diameter={diameter} />);

      expect(getByRole("img")).toHaveAttribute("width", String(diameter));
      expect(getByRole("img")).toHaveAttribute("height", String(diameter));
    }
  );

  it("has default diameter", () => {
    const { getByRole } = render(<ProfilePicture />);
    expect(getByRole("img")).toHaveAttribute("width", "100");
    expect(getByRole("img")).toHaveAttribute("height", "100");
  });

  it.each([
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/6.jpg",
  ])("has correct profile picture URL: %s", (profileUrl: string) => {
    const { getByRole } = render(<ProfilePicture profileUrl={profileUrl} />);
    expect(getByRole("img")).toHaveAttribute(
      "src",
      expect.stringMatching(encodeURIComponent(profileUrl))
    );
  });

  it("has default profile picture URL", () => {
    const { getByRole } = render(<ProfilePicture />);
    expect(getByRole("img")).toHaveAttribute(
      "src",
      expect.stringMatching(
        encodeURIComponent("https://randomuser.me/api/portraits/men/1.jpg")
      )
    );
  });

  it.each([
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/6.jpg",
  ])("acts on click, with %s", (profileUrl: string) => {
    const onClickFct = vi.fn((url: string) => {});
    const { getByRole } = render(
      <ProfilePicture profileUrl={profileUrl} onClick={onClickFct} />
    );
    getByRole("button").click();
    expect(onClickFct).toHaveBeenCalled(profileUrl);
  });
});
