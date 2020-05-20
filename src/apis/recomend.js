import axios from '@/plugins/axios.js'

export  function RecomendList(){
	return axios({
		url:'/personalized',
		method:'post',
		data:{
			limit:30
		}
	})
}