from flask import Flask, request, Response
import logging
import re
import json

app = Flask(__name__)

logging.basicConfig(level=logging.DEBUG)

# 处理GET请求
@app.route('/', methods=['GET'])
def handle_get():
    return Response("<h3>It is OK!</h3>", mimetype='text/html')

# 处理POST请求
@app.route('/', methods=['POST'])
def handle_post():
    # 获取POST请求的json数据
    data = request.get_json()
    app.logger.debug("Received data: %s", data)
    
    # 检查数据是否为空
    if data is None:
        app.logger.debug("No data received or data is not in JSON format")
        return "No data received or data is not in JSON format", 400
    
    # 检查是否包含 challenge 字段
    challenge = data.get('challenge')
    if challenge:
        # 返回 challenge 字段的值
        return {"challenge": challenge}, 200

    event_type = data.get('header').get('event_type')
    # im.message.reaction.created_v1
    # im.message.receive_v1
    app.logger.debug(event_type)

    if event_type == 'im.message.receive_v1':
        handle_ack_command(data)
        return "Event Recieved", 200
    
    '''
    if event_type == 'im.reaction.added_v1':
        app.logger.debug("Received im.message.receive_v1")
        return "Event Recieved", 200
    '''
    return "Event Recieved", 200


def handle_ack_command(data):
    # 获取消息内容
    content = data.get('event').get('message').get('content')
    msg = json.loads(content).get('text')
    if msg:
        if msg.startswith('/ack'):
            app.logger.debug("This is a ack command, command content: %s", msg)
            # 检查消息是否匹配 /ack number
            match = re.match(r'^/ack (\d+)$', msg)
            if match:
                monitor_id = match.group(1)
                app.logger.debug(f"monitor_id: {monitor_id}")
            else:
                app.logger.debug("Invalid /ack command format")
        else:
            app.logger.debug("Not a  ack command, message content: %s", msg)


def handle_reaction(data):
    """
    emoji_type: 'Soccer' 
    """
    emoji_type = data.get('event').get('reaction_type').get('emoji_type')
    message_id = data.get('event').get('message_id')
    if emoji_type == 'Soccer':
        app.logger.debug("Received im.message.receive_v1")

        return "Event Recieved", 200



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888, debug=True)