from flask import Flask, request
import logging

app = Flask(__name__)

# 设置日志级别为DEBUG
logging.basicConfig(level=logging.DEBUG)

# 处理POST请求
@app.route('/', methods=['POST'])
def handle_post():
    # 获取POST请求的json数据
    data = request.get_json()
    
    # 打印接收到的数据
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
    else:
        return "No challenge field in data", 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888)