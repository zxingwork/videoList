import os
import cv2

def createThumbnail():
    videodirpath = '/Volumes/zxingspace/video'
    saveimgpath = '/Volumes/zxingspace/img'
    videolist = os.listdir(videodirpath)
    imglist = os.listdir(saveimgpath)
    for i in videolist:
        if i.split('.')[0] not in imglist:
            videopath = os.path.join(videodirpath, i)
            vidcap = cv2.VideoCapture(videopath)
            success, image = vidcap.read()
            imag = cv2.imwrite(os.path.join(saveimgpath, '{}.jpg'.format(i.split('.')[0])), image)
            if imag: print("ok")



if __name__ == '__main__':
    createThumbnail()