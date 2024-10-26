# this is where the proxy code will go
from bs4 import BeautifulSoup
# api.py
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.json  # Get JSON data from the request
    print(data)          # Print the received data
    return jsonify({"status": "success", "data": data}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)