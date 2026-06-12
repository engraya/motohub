import { describe, it, expect } from "vitest";
import { buildSearchUrl, removeSearchParam } from "./url";

const asParams = (str: string) => new URLSearchParams(str);

describe("buildSearchUrl", () => {
  it("adds a new param to an empty set", () => {
    const result = buildSearchUrl("/explore", asParams(""), "manufacturer", "bmw");
    expect(result).toBe("/explore?manufacturer=bmw");
  });

  it("updates an existing param without losing others", () => {
    const result = buildSearchUrl("/explore", asParams("year=2022&fuel=gas"), "year", "2023");
    const url = new URL(result, "http://x");
    expect(url.searchParams.get("year")).toBe("2023");
    expect(url.searchParams.get("fuel")).toBe("gas");
  });

  it("preserves the pathname", () => {
    const result = buildSearchUrl("/explore", asParams(""), "model", "civic");
    expect(result.startsWith("/explore")).toBe(true);
  });
});

describe("removeSearchParam", () => {
  it("removes the specified param", () => {
    const result = removeSearchParam("/explore", asParams("year=2022&fuel=gas"), "year");
    const url = new URL(result, "http://x");
    expect(url.searchParams.has("year")).toBe(false);
  });

  it("keeps other params intact", () => {
    const result = removeSearchParam("/explore", asParams("year=2022&fuel=gas"), "year");
    const url = new URL(result, "http://x");
    expect(url.searchParams.get("fuel")).toBe("gas");
  });

  it("is case-insensitive for the param name", () => {
    const result = removeSearchParam("/explore", asParams("Year=2022"), "Year");
    const url = new URL(result, "http://x");
    expect(url.searchParams.has("year")).toBe(false);
  });
});
