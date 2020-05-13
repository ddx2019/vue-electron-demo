import axios from "@/plugins/axios.js";

export  function HotMusic(){
	return	axios({
		url: '/playlist/hot',  /*热门歌单接口地址*/
        method: 'post'
	})
}