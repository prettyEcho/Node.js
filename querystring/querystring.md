### querystring
	1. querystring.stringify(json,[seq],[eq])
		* 把json格式的query序列化成字符串。
		* json:json 要序列的json
		* seq:string 键值对之间的连接符
		* eq:string 键与值之间的连接符

	2. querystring.parse(string,[seq],[eq])
		* 把string格式的query解析成json
		* string:string 要解析的字符串
		* seq:string 键值对之间的连接符
		* eq:string 键与值之间的连接符