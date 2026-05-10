// Lab VI.3.1.
import { describe, it, expect } from "vitest";
import { ok, fail } from "../src/shared/Result";

describe("Result", () => {
  it ("returns success", () => {
    const result = ok(123);

    expect(result.success).toBe(true);
  });

  it("returns failure", () => {
    const result = fail("Error");

    expect(result.success).toBe(false)
  });
});