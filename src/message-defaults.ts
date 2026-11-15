import type { APIEmbed } from "discord-api-types/v10";

export type DefaultModuleType = "WELCOME" | "GOODBYE" | "WELCOME_DM";

export type DefaultMessage = { content: string; embeds: APIEmbed[] };

function deepFreeze<T extends object>(value: T): T {
  for (const child of Object.values(value)) {
    if (typeof child === "object" && child !== null) deepFreeze(child);
  }
  return Object.freeze(value);
}

export const defaultMessages: Readonly<
  Record<DefaultModuleType, DefaultMessage>
> = deepFreeze({
  WELCOME: {
    content: "Welcome {user} to {guild}",
    embeds: [
      {
        title: "Welcome to the server",
        description: "Welcome {user} to {guild}",
        fields: [{ name: "Member count", value: "{memberCount}" }],
      },
    ],
  },
  GOODBYE: {
    content: "Goodbye {user} from {guild}",
    embeds: [
      {
        title: "Goodbye from the server",
        description: "Goodbye {user} from {guild}",
        fields: [{ name: "Member count", value: "{memberCount}" }],
      },
    ],
  },
  WELCOME_DM: {
    content: "Welcome to {guild}, {username}!",
    embeds: [],
  },
});
