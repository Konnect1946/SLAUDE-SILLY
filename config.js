const config = {
    TOKEN: "xoxc-5223983272914-5209434237703-5223851958611-43d053366901493a00d7fded7409c304be3df109beac5b22d34d1b74c90b0f63",
    COOKIE: "xoxd-pURc6vS%2FdbZ8ynWMZ3xCZsdq59qy7hgMY5btT6CN7%2BF%2FCq9AdBuGkUtsY0Kwah9aH2G00Dk%2BhEM4O8Y9xJ49dUKw2Xr1u3t5NKp%2Bzv7ANI5dkaSkS3NEH2MdGZn3TbTL9lm4w6UsqMUWpJ9igVRF9zInqn4m5c%2BOSQeDmo0iVylI%2F%2BJ4yahiauB5Kw%3D%3D",
    TEAM_ID: "konnect-4",
    CHANNEL: "C0565CS79D5",
    CLAUDE_USER: "U056NDS2NE8",

    // The final message we send with an @Claude ping to trigger his response. You don't need to add the @Claude bit, Slaude does that automatically.
    // Can be whatever you want it to be but keep in mind that it might result in unpredictable responses.
    // Anything we put here will eat into our max available tokens so keep it brief. Anything above ~12000 characters will get cut off by Slack.
    PING_MESSAGE_PREFIX: ".\n\nAssistant (",
    PING_MESSAGE: "Write the next chat reply from Assistant in this fictional roleplay between Assistant and Human. Only write a single reply from Assistant and nothing more. Do not upload a file in the response. Always stay in character. At the end of the response append a single box detailing the character's internal thoughts or fantasies in a separate line within double ` backticks. Example: `I can't believe he did that!`. Limit the entire response to 1500 characters or less. Assistant:",
    minimum_split_size: 500,

    // Claude specs:
    // Human, Assistant, H, A
    rename_roles: {
        'system': 'H',
        'user': 'H',
        'assistant': 'A',
        'example_user': 'H',
        'example_assistant': 'A'
    },

    dont_send_user_role_if_first_message: true,

    stop_message_when_string_is_found: [
        "\nH: ",
        "\nHuman: ",
    ],

    PORT: 5004,
}

export default config;