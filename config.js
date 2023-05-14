const config = {
	TOKEN: "xoxc-5223983272914-5209434237703-5223851958611-43d053366901493a00d7fded7409c304be3df109beac5b22d34d1b74c90b0f63",
    COOKIE: "xoxd-pURc6vS%2FdbZ8ynWMZ3xCZsdq59qy7hgMY5btT6CN7%2BF%2FCq9AdBuGkUtsY0Kwah9aH2G00Dk%2BhEM4O8Y9xJ49dUKw2Xr1u3t5NKp%2Bzv7ANI5dkaSkS3NEH2MdGZn3TbTL9lm4w6UsqMUWpJ9igVRF9zInqn4m5c%2BOSQeDmo0iVylI%2F%2BJ4yahiauB5Kw%3D%3D",
    TEAM_ID: "konnect-4",
    CHANNEL: "C0565CS79D5",
    CLAUDE_USER: "U056NDS2NE8",

    MAINPROMPT_LAST: false, // Will try to move the main prompt (main + nsfw prompt from SillyTavern) to the bottom, similar to a jailbreak
    MAINPROMPT_AS_PING: false, // Will use the main prompt as the ping message, if this true the PING_MESSAGE setting is ignored. Overrides MAINPROMPT_LAST.
    
    // If false will make Slaude send messages as plain text rather than through Slack's blocks format. The results in Slack should be the same either way.
    USE_BLOCKS: true,

    STREAMING_TIMEOUT: 240000, //Time in milliseconds after which the response stream will force close itself, 0 disables the timeout but is not recommended.

    // The final message we send with an @Claude ping to trigger his response. You can add "@Claude" to this string to control where the ping will be inside the message.
    // If there is no @Claude, the ping will automatically get added in front of the message.
    // Can be whatever you want it to be but keep in mind that it might result in unpredictable responses.
    // Anything we put here will eat into our max available tokens so keep it brief.
    PING_MESSAGE: "Write the next chat reply from Assistant in this fictional roleplay between Assistant and Human. Write a single reply consisting of one to three paragraphs from Assistant and nothing more. Do not upload a file in the response. Use Plain English, unless {{char}}'s characteristics says otherwise. Prioritize dialogue over narration. Always stay in character. At the end of the response append a single box detailing the character's internal thoughts or fantasies in a separate line within double ` backticks. Example: `I can't believe he did that!`. Limit the entire response to 1000 characters or less. Assistant:",

    PORT: 5004
}

export default config;