import flask
import json
import os, csv, time
import random
import struct
import modbus_tk.defines as md
import modbus_tk.modbus_tcp as mt
from flask_cors import *
server = flask.Flask(__name__)
CORS(server,supports_credentials=True)


@server.route('/videolist', methods=['get'])
def getVideoList():
    filepath = '/Volumes/zxingspace/video'
    videolist = get_file_list(filepath)
    videodict = dict(zip(range(len(videolist)), videolist))
    return videodict


def get_file_list(file_path):
    dir_list = os.listdir(file_path)
    if not dir_list:
        return
    else:
        # 注意，这里使用lambda表达式，将文件按照最后修改时间顺序升序排列
        # os.path.getmtime() 函数是获取文件最后修改时间
        # os.path.getctime() 函数是获取文件最后创建时间
        dir_list = sorted(dir_list, key=lambda x: os.path.getmtime(os.path.join(file_path, x)), reverse=True)
        # print(dir_list)
        return dir_list


if __name__ == '__main__':
    server.run(host='0.0.0.0',port='9527',debug=True)