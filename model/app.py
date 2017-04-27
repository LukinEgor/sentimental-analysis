from flask import Flask, request
from flask import request
app = Flask(__name__)

@app.route('/')
def runAnalysis():
    param = request.args.get('comments')
    return 'Flask Dockerized' + param

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
