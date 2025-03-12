// webhook bot --> card (bot message will not trigger a webhook to your python serer)
// user  action on card <-- get the messageid

// find the message by messageId
// --> get the message content (      content: '{"text":"1111"}', )
const messageData = {
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

const emojiActionData = {
  schema: "22.0",
  header: {
    event_id: "01e3546aed7325434d6e63994fd5de72",
    token: "YJ90o3tWUQK45YB8lIKzvemTyt6AEmUx",
    create_time: "1737455924344",
    event_type: "im.message.reaction.created_v1",
    tenant_key: "14ead984d00ed75a",
    app_id: "cli_a705e8ccd8789009",
  },
  event: {
    action_time: "1737455924344",
    // message from webhook bot (datadog)
    message_id: "om_6a9691865d2f4efee4aafd7f37c37bca",
    operator_type: "user",
    reaction_type: { emoji_type: "OK" },
    user_id: {
      open_id: "ou_0a9e07d881f28149897be52261eb1261",
      union_id: "on_3f4147dc004d7252225d17bcd98b8659",
      user_id: "2c1a5f3g",
    },
  },
};

// 1. get the message content
const messageId = "om_6a9691865d2f4efee4aafd7f37c37bca";
lark.message.get(messageId).then((res) => {
  const cardJson = JSON.parse(res.content);

  lark.message.reply(messageId, {
    msg_type: "interactive",
    card: {
      config: {
        wide_screen_mode: true,
      },
      header: {
        title: {
          tag: "plain_text",
          content: "title",
        },
      },
      elements: [
        {
          tag: "div",
          text: {
            tag: "lark_md",
            content: "content",
          },
        },
        {
          tag: "action",
          actions: [
            {
              tag: "button",
              text: {
                tag: "plain_text",
                content: "button",
              },
              type: "default",
              value: {
                key: "value",
              },
            },
          ],
        },
      ],
    },
  });
});


{'schema': '2.0', 'header': {'event_id': '8779399c268fa3ba8651dafc05d74382', 'token': 'YJ90o3tWUQK45YB8lIKzvemTyt6AEmUx', 'create_time': '1737461730661', 'event_type': 'im.message.reaction.created_v1', 'tenant_key': '14ead984d00ed75a', 'app_id': 'cli_a705e8ccd8789009'}, 'event': {'action_time': '1737461730661', 'message_id': 'om_a64c461faa45dbdd39071d5c371caa43', 'operator_type': 'user', 'reaction_type': {'emoji_type': 'Soccer'}, 'user_id': {'open_id': 'ou_0a9e07d881f28149897be52261eb1261', 'union_id': 'on_3f4147dc004d7252225d17bcd98b8659', 'user_id': '2c1a5f3g'}}}