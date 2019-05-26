让进程一直跑着
https://www.ibm.com/developerworks/cn/linux/l-cn-nohup/index.html
sudo screen -dmS zhongyi
你进 biz 进程 把biz中断吧
查看有几个进程在运行
screen -ls
 结束一个session
sudo screen -r zhongyi 进入该进程，再exit
 或者 screen -S zhongyi -X quit ( edm_10000 应该是name)

