// webhook bot --> card (bot message will not trigger a webhook to your python serer)
  // user  action on card <-- get the messageid

// find the message by messageId
 // --> get the message content (      content: '{"text":"1111"}', )
const data = {
  schema: "2.0",
  header: {
    event_id: "7ceca3fab4848ba5ad1ef78fe0f98bec",
    token: "YJ90o3tWUQK45YB8lIKzvemTyt6AEmUx",
    create_time: "1737454201842",
    event_type: "im.message.receive_v1",
    tenant_key: "14ead984d00ed75a",
    app_id: "cli_a705e8ccd8789009",
  },
  event: {
    message: {
        // group id alt + ?
      chat_id: "oc_ac5e1cea84ace380ef470bc8d37bbc81", // 会话ID
      chat_type: "group",
      content: '{"text":"1111"}',
      create_time: "1737454201593",
      message_id: "om_0cf47020a20e17340642fa5e0b9be3b8",
      message_type: "text",
      update_time: "1737454201593",
    },
    sender: {
      sender_id: {
        open_id: "ou_0a9e07d881f28149897be52261eb1261",
        union_id: "on_3f4147dc004d7252225d17bcd98b8659",
        user_id: "2c1a5f3g",
      },
      sender_type: "user",
      tenant_key: "14ead984d00ed75a",
    },
  },
};
