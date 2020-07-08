
module.exports = {
	base: '/',
    title: 'Notes',
	description: '编程学习笔记',
	head :[
		['title',{innerHTML:'My Notes'}],
		['link',{rel:'icon',href:'https://kyun.ltyuanfang.cn/tc/2020/06/05/82c25b65cd02d.png'}]
	],
	themeConfig: {
	    repo: 'https://github.com/uzibird/docs.git',
	    repoLabel: 'GitHub',
	  	nav: [
			  { text: 'item', link: '/' },
			  { text:'vuepress', link:'/vuepress/'},
	  		{ text: 'Python', link: '/Python/' }
		  ],
		sidebar: 'auto'
		
		  
	}
	
}
