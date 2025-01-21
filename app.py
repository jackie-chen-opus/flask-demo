from flask import Flask, request

app = Flask(__name__)

# 处理POST请求
@app.route('/', methods=['POST'])
def handle_post():
    # 获取POST请求的json数据
    data = request.get_json()
    
    # 打印接收到的数据
    print("Received data:", data)
    
    # 返回响应
    return "Data received!", 200

# 处理GET请求
@app.route('/', methods=['GET'])
def handle_get():
    # 返回固定消息
    return "This is a demo", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888)
