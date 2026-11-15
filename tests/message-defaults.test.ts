import { describe, expect, it } from "vitest";

import { defaultMessages } from "../src/index.js";

const fields = [{ name: "Member count", value: "{memberCount}" }];

function collectFrozenTargets(value: unknown): unknown[] {
  if (typeof value !== "object" || value === null) return [];
  return [value, ...Object.values(value).flatMap(collectFrozenTargets)];
}

describe("defaultMessages", () => {
  it("exposes exactly the three module types", () => {
    const keys = Object.keys(defaultMessages);

    expect(keys).toEqual(["WELCOME", "GOODBYE", "WELCOME_DM"]);
  });

  it("defines the welcome message with its embed", () => {
    const message = defaultMessages.WELCOME;

    expect(message).toEqual({
      content: "Welcome {user} to {guild}",
      embeds: [
        {
          title: "Welcome to the server",
          description: "Welcome {user} to {guild}",
          fields,
        },
      ],
    });
  });

  it("defines the goodbye message with its embed", () => {
    const message = defaultMessages.GOODBYE;

    expect(message).toEqual({
      content: "Goodbye {user} from {guild}",
      embeds: [
        {
          title: "Goodbye from the server",
          description: "Goodbye {user} from {guild}",
          fields,
        },
      ],
    });
  });

  it("defines the direct message without embed", () => {
    const message = defaultMessages.WELCOME_DM;

    expect(message).toEqual({
      content: "Welcome to {guild}, {username}!",
      embeds: [],
    });
  });

  it("is deeply frozen so shared defaults cannot be mutated", () => {
    const targets = collectFrozenTargets(defaultMessages);

    const unfrozen = targets.filter((target) => !Object.isFrozen(target));

    expect(targets.length).toBeGreaterThan(10);
    expect(unfrozen).toEqual([]);
  });
});
