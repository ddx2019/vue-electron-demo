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

export function AnchorStation() { // 主播电台 (推荐电台）
    return axios({
        url: '/personalized/djprogram',
        method: 'post'
    })
}

export function djHot(limit) { //听听， 热门电台
    return axios({
        url: '/dj/hot',
        method: 'post',
        data: {
            limit: limit
        }
    })
}

export function wangyiMV(limit) { // 看看,  网易出品 mv
    return axios({
        url: '/mv/exclusive/rcmd',
        method: 'post',
        data: {
            limit: limit
        }
    })
}

export function songURL(id) { // 获取音乐 url
    return axios({
        url: '/song/url',
        method: 'post',
        data: {
            id: id
        }
    })
}


export function RelatedPlaylist(id) { // 相关歌单推荐
    return axios({
        url: '/related/playlist',
        method: 'post',
        data: {
            id: id
        }
    })
}