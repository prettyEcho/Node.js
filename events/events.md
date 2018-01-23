### events
	1. 加载模块
		let EventEmmiter = require('events').EventEmmiter
		life = new EventEmmiter();

	2. 方法：
		* 监听事件：life.on/addListener(eventName, listener) 
		* 只监听一次事件：life.once(eventName, listener)
		* 触发事件：life.emit(eventName,param)
		* 移除事件监听：life.removeListener(eventName, listener) //listener为具名函数
					life.removeAllListeners([eventName])
		* 判断是否监听了事件：let hasEchoListener = life.emit('echo', listener);   
						console.log(hasEchoListener);  //boolean
		* 当前监听事件的句柄：life.listeners(eventName);
		* 当前监听事件的个数：life.listenerCount(eventName);
		* 获取一个事件最大监听器个数：life.getMaxListeners();  //默认一个事件最多有10个监听器
		* 设置一个事件最大监听器个数：life.setMaxListeners(n);
		* 添加新事件监听事件：life.on('newListener',(event, listener) => {}); //如果有同名监听事件会自动移到事件列表最前头。
		* 移除事件监听事件：life.on('removeListener', (event, listener) => {})
		* 获取监听事件名数组：console.log(life.eventNames());
		* 添加事件监听到监听数组前面：life.prependListener(eventName, listener); //调用多次会添加多次
							   life.prependOnceListener(eventName, listener); //调用多次会添加一次