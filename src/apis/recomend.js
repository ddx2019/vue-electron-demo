import axios from '@/plugins/axios.js'


//主页

export function mainBanner() { // banner
    return axios({
        url: '/banner',
        method: 'post'
    })
}

export function RecomendList(limit) { //推荐歌单
    return axios({
        url: '/personalized',
        method: 'post',
        data: {
            limit: limit
        }
    })
}

export function privateContent() { //独家放送
    return axios({
        url: '/personalized/privatecontent',
        method: 'post'
    })
}

export function LatestMusic() { //最新音乐
    return axios({
        url: '/personalized/newsong',
        method: 'post'
    })
}