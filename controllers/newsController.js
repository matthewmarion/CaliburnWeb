exports.news_list = function(req, res) {
	res.render('news', { 
		title: 'News',
		post: [{
			author: 'hm04',
			time_posted: 'an hour ago',
			title: 'Herpku Post title 2',
			content: '<!-- SC_OFF --><div class="md"><h1><strong>Welcome</strong></h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec justo ante. Sed fermentum, ligula ac mollis feugiat, lorem nunc bibendum lacus, nec varius nulla sem sit amet odio. Duis ultrices tincidunt tortor sed bibendum. Aliquam congue nibh sed sapien placerat, et ornare sem tempus. Sed a semper purus, eget dictum leo. Fusce molestie ex nec egestas facilisis. Maecenas ultricies sem eu massa iaculis, nec pretium urna porttitor. Nam eu nulla et sapien euismod ultrices quis nec sapien. Sed rutrum, lorem non porta sagittis, leo eros fringilla mauris, a posuere felis purus vitae turpis. Curabitur vel risus vel diam maximus rhoncus ac quis erat. Donec at tincidunt risus.</p>\n\n<h1><strong>Release</strong></h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec justo ante. Sed fermentum, ligula ac mollis feugiat, lorem nunc bibendum lacus, nec varius nulla sem sit amet odio. Duis ultrices tincidunt tortor sed bibendum. Aliquam congue nibh sed sapien placerat, et ornare sem tempus. Sed a semper purus, eget dictum leo. Fusce molestie ex nec egestas facilisis. Maecenas ultricies sem eu massa iaculis, nec pretium urna porttitor. Nam eu nulla et sapien euismod ultrices quis nec sapien. Sed rutrum, lorem non porta sagittis, leo eros fringilla mauris, a posuere felis purus vitae turpis. Curabitur vel risus vel diam maximus rhoncus ac quis erat. Donec at tincidunt risus:</p>\n\n<ul>\n<li>Item 1<br/></li>\n<li>Item 2<br/></li>\n<li>Item 3</li>\n</ul>\n</div><!-- SC_ON -->'
		},
		{
			author: 'hm04',
			time_posted: '1 day ago',
			title: 'Post title 1',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec justo ante. Sed fermentum, ligula ac mollis feugiat, lorem nunc bibendum lacus, nec varius nulla sem sit amet odio. Duis ultrices tincidunt tortor sed bibendum. Aliquam congue nibh sed sapien placerat, et ornare sem tempus. Sed a semper purus, eget dictum leo. Fusce molestie ex nec egestas facilisis. Maecenas ultricies sem eu massa iaculis, nec pretium urna porttitor. Nam eu nulla et sapien euismod ultrices quis nec sapien. Sed rutrum, lorem non porta sagittis, leo eros fringilla mauris, a posuere felis purus vitae turpis. Curabitur vel risus vel diam maximus rhoncus ac quis erat. Donec at tincidunt risus.'
		}]
	});
};