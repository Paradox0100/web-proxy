from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define the path to the front-end directory
FRONTEND_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'front-end')

@app.route('/')
def home():
    return send_from_directory(FRONTEND_DIR, 'index.html')

@app.route('/<path:filename>', methods=['GET'])
def serve_static(filename):
    return send_from_directory(FRONTEND_DIR, filename)

@app.route('/process', methods=['POST'])
def process_data():
    data = request.json  # Get JSON data from the request
    print(data)          # Process the data as needed
    return jsonify({"status": "success", "received": data}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)