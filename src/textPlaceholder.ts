import { APIGuild, APIGuildMember, APIUser } from "discord-api-types/v10";

export type Member = Pick<APIGuildMember, "user"> & {
  user: Pick<
    APIUser,
    "id" | "username" | "discriminator" | "global_name" | "avatar"
  >;
};

export type Guild = Pick<APIGuild, "id" | "name" | "approximate_member_count">;

export const placeholders = {
  user: "User tag",
  username: "Username",
  globalName: "Global name",
  id: "User ID",
  discriminator: "User discriminator",
  avatar: "Avatar URL",
  guild: "Guild name",
  guildId: "Guild ID",
  channel: "Channel name",
  channelId: "Channel ID",
  memberCount: "Guild member count",
  memberCountFormatted: "Formatted guild member count",
};

export const placeholderDescriptions = {
  user: "The user's tag (e.g., User#1234)",
  username: "The user's username (e.g., User)",
  globalName: "The user's global name (if set)",
  id: "The user's ID (e.g., 123456789012345678)",
  discriminator: "The user's discriminator (e.g., 1234)",
  avatar: "The URL of the user's avatar",
  guild: "The name of the server",
  guildId: "The ID of the server",
  channel: "The name of the channel where the command was used",
  channelId: "The ID of the channel where the command was used",
  memberCount: "The total number of members in the server",
  memberCountFormatted:
    "The total number of members in the server, formatted with commas",
};

export const replacePlaceholders = (
  text: string,
  member: Member,
  guild: Guild,
  isText: boolean = true,
): string => {
  const user = member.user;
  return text
    .replace(/{user}/g, isText ? `<@${user.id}>` : `${user.username}`)
    .replaceAll(/{username}/g, user.username)
    .replaceAll(/{globalName}/g, user.global_name || user.username)
    .replaceAll(/{id}/g, user.id)
    .replaceAll(/{discriminator}/g, user.discriminator)
    .replaceAll(
      /{avatar}/g,
      user.avatar
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
        : "",
    )
    .replaceAll(/{guild}/g, guild.name)
    .replaceAll(/{guildId}/g, guild.id)
    .replaceAll(/{channel}/g, `{channel}`)
    .replaceAll(/{channelId}/g, `{channelId}`)
    .replaceAll(
      /{memberCount}/g,
      guild.approximate_member_count?.toString() || "0",
    )
    .replaceAll(
      /{memberCountFormatted}/g,
      formatMemberCount(guild.approximate_member_count || 0),
    );
};

function formatMemberCount(count: number): string {
  return count.toLocaleString();
}
