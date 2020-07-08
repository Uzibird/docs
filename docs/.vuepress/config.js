
module.exports = {
	base: '/',
    title: 'Notes',
	description: '编程学习笔记',
	head :[
		['title','My Notes'],
		['link',{rel:'icon',href:'/favicon.png'}]
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
