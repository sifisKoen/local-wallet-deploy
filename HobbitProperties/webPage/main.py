from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/addProperty', methods=['POST'])
def add_property():
    data = request.json
    user_address = data.get('userAddress')
    property_id = data.get('propertyId')
    user_private_key = data.get('userPrivateKey')  # Be cautious with handling private keys

    cmd = f"cast send --rpc-url http://localhost:8545 --private-key {user_private_key} 0x5FbDB2315678afecb367f032d93F642f64180aa3 'assign_property(uint,address)' {property_id} {user_address}"
    process = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()

    if process.returncode != 0:
        return jsonify({'error': stderr.decode()}), 400
    return jsonify({'output': stdout.decode()})

@app.route('/askPropertyInfo', methods=['POST'])
def ask_property_info():
    data = request.json
    user_address = data.get('userAddress')
    property_id = data.get('propertyId')

    cmd = f"cast call --rpc-url http://localhost:8545 0x5FbDB2315678afecb367f032d93F642f64180aa3 'is_propery_owned(uint256,address)' {property_id} {user_address}"
    process = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()

    if process.returncode != 0:
        return jsonify({'error': stderr.decode()}), 400
    return jsonify({'output': stdout.decode()})

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000, debug=True)
