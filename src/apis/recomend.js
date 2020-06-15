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

export function RecommendMV() { // 推荐MV
    return axios({
        url: '/personalized/mv',
        method: 'post'
    })
}

export function AnchorStation() { // 主播电台 ，接口待测
    return axios({
        url: '/dj/hot',
        method: 'post'
    })
}