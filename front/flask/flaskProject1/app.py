from flask import Flask, jsonify, request, make_response
import json


app = Flask(__name__)


@app.route("/", methods=['POST'])
def add():
    data = request.get_json()
    f = open('data.json', "r")
    old_data = json.load(f)
    old_data.append(data)
    f.close()
    f = open('data.json', "w")
    new_data = json.dumps(old_data)
    f.write(str(new_data))
    f.close()
    return {}

@app.route('/data')
def get_data():  # put application's code here
    f = open('data.json')
    data = json.load(f)
    for i in data:
        print(i)

    f.close()
    return data

def remove_char(s):
    result = s[1 : -1]
    return result


@app.route('/import', methods=['POST'])
def importing():
    data = request.get_json()
    print(data)
    print(type(data))

    f = open('data.json', "r")
    old_data = json.load(f)
    # old_data.append(k)
    print(old_data)
    print(type(old_data))
    f.close()

    new_data = data + old_data
    print(new_data)

    f = open('data.json', "w")
    new_data = json.dumps(new_data)
    f.write(str(new_data))
    f.close()

    return {}

if __name__ == '__main__':
    app.run()
