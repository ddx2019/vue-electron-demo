import axios from '@/plugins/axios.js'

export function RecomendList(limit) {
    return axios({
        url: '/personalized',
        method: 'post',
        data: {
            limit: limit
        }
    })
}

export function recomendNewSong() {
    return axios({
        url: '/personalized/newsong',
        method: 'post'
    })
}

export function privateContent() {
    return axios({
        url: '/personalized/privatecontent',
        method: 'post'
    })
}