# Privacy Policy

**Effective date:** September 30, 2026

This Privacy Policy explains what information the **Draw** Discord bot ("Draw", "we", "us") processes, why it is processed, how long it is kept, and the choices you have. It applies to every server Draw has been added to and to every user who interacts with it.

::: info Summary
- Draw reads message content for two features only: **AntiScam** (phishing link warnings) and **Snipe** (moderator view of the last deleted message).
- Message content is processed **in memory only**. It is never written to disk, stored in a database, logged, sold, shared, or used to train AI or machine-learning models.
- The only data Draw keeps long-term is the list of users and servers that have changed their feature settings.
:::

## 1. Information we process

| Data | Purpose | Retention |
| --- | --- | --- |
| **Message content** in servers where AntiScam is enabled | Detecting known phishing links | Discarded as soon as the message has been checked |
| **Content and author of a deleted message** | Snipe feature (see Section 2.2) | In memory only, for at most **5 minutes** |
| **Discord user IDs** of users who opted out of Snipe | Remembering your opt-out | Until you opt back in or ask us to delete it |
| **Discord server IDs** of servers that disabled AntiScam | Remembering the server setting | Until the setting is re-enabled or you ask us to delete it |
| **Public profile data** (username, avatar, roles, permissions, account and join dates) | Showing command results such as `/extensions userinfo` and `/extensions avatar` | Not stored. It is used only to build the reply |
| **Operational logs** (timestamps, user, server and channel IDs, server names, error details) | Keeping Draw running, fixing bugs, preventing abuse | Deleted automatically after about **14 days** |

Our logs **never** contain message content.

## 2. How each feature uses message content

### 2.1 Draw AntiScam™

When a message is posted in a server where AntiScam is enabled, Draw extracts any links and checks them against the public, community-maintained phishing domain list at [nikolaischunk/discord-phishing-links](https://github.com/nikolaischunk/discord-phishing-links). The check runs locally on our server. The message is never sent to that list's maintainers or to any other third party.

If a match is found, Draw posts a warning in the channel that names the flagged link. Nothing about the message is kept after the check.

AntiScam is **enabled by default**. A server administrator can turn it off at any time with `/toggle antiscam`.

### 2.2 Draw Sniper™

When a message is deleted, Draw keeps the text and author of the **most recent** deleted message in that channel in memory. Only members with the **Manage Messages** permission can view it, using `/extensions snipe`. The data is erased after 5 minutes, or sooner if another message is deleted in the same channel. It is never written to disk, and it is lost when Draw restarts.

Snipe is **enabled by default**. Any user can opt out with `/toggle snipe`. Deleted messages from opted-out users are never captured.

## 3. What we do not do

- We do **not** sell, rent or trade any data.
- We do **not** share message content or personal data with third parties.
- We do **not** use any data to train artificial-intelligence or machine-learning models.
- We do **not** use any data for advertising, profiling or analytics.
- We do **not** access messages in servers where Draw has not been added, or in channels Draw cannot see.

## 4. Third-party services

Some commands, such as media commands, fetch content from external websites and APIs. Those requests contain only the search parameters Draw needs, for example an image category. They never include your Discord ID, username or messages. Links opened from Draw's replies, including advertising links, lead to third-party websites that have their own privacy policies.

Draw runs on Discord. Your use of Discord is governed by [Discord's Privacy Policy](https://discord.com/privacy).

## 5. Security

Data is held on infrastructure operated by the Draw developer, and only the developer can access it. The bot credentials and server are protected by reasonable technical measures. No online service can guarantee absolute security, but we keep the amount of data we hold to a minimum so that there is very little at risk.

## 6. Your choices and rights

- **Opt out of Snipe:** `/toggle snipe`
- **Disable AntiScam for a server** (administrators only): `/toggle antiscam`
- **Stop all processing in a server:** remove Draw from the server.
- **Access or deletion:** contact us (see Section 9) to ask for a copy, or the deletion, of any stored IDs linked to you or your server. We will respond within 30 days.

## 7. Children

Draw may only be used by people who meet [Discord's minimum age requirement](https://discord.com/terms) in their country. Media commands marked as NSFW are restricted to users aged **18 or older** and only work in age-restricted channels. We do not knowingly collect information from children.

## 8. Changes to this policy

We may update this policy when Draw's features change. The effective date at the top of the page will always show the latest revision. If a change significantly affects how message content is processed, we will announce it before the change takes effect.

## 9. Contact

For privacy questions or data requests, contact the Draw developer on Discord. You can find the developer's account with the `/information info` command.
