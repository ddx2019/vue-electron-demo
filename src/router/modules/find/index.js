// 发现音乐
const findRoutes={
		path:'/',
		// name:'find-music',
		component:() => import('@/views/recomend/findMusic'),
		children:[
		{
			path:'/',
			name:'personal-recommend',
			component:() => import('@/views/recomend/findMusic/recomend')
		},
		{
			path:'/songs',
			name:'songs-list',
			component:() => import('@/views/recomend/findMusic/songs')
		},
		{
			path:'/radio',
			name:'radio-station',
			component:() => import("@/views/recomend/findMusic/radio")
		},
		{
			path:'/rank',
			name:'ranking-list',
			component:() => import('@/views/recomend/findMusic/rank')
		},
		{
			path:'/singer',
			name:'singer',
			component:() => import('@/views/recomend/findMusic/singer')
		},
		{
			path:'/latest',
			name:'latest-music',
			component:() => import('@/views/recomend/findMusic/latest')
		}
		]
  }

  export default findRoutes;