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
    
    # 返回响应
    return "Data received!", 200

# 处理GET请求
@app.route('/', methods=['GET'])
def handle_get():
    return "This is a demo", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888, debug=True)