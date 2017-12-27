'use strict';
require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');
const request = require('request');
let postUrl = 'http://localhost:3000/api/news/';

const reddit = new Snoowrap({
	userAgent: 'reddit.us.caliburn.1.0.0',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS
});

const client = new Snoostorm(reddit);

const redditStreamOpts = {
	subreddit: 'caliburnhcf',
	results: 1
};

const redditData = {};

redditData.submissions = client.SubmissionStream(redditStreamOpts);

redditData.filterPostRequirements = function(submission) {
	if (process.env.NODE_ENV == 'production') {
		postUrl = 'https://caliburn-web.herokuapp.com/api/news';
	}
	if (!submission.can_mod_post) {
		return;
	}

	if (postIsEmpty(submission.selftext)) {
		return;
	}

	if (!postContainsStar(submission.title)) {
		return;
	}
	let title = removeStar(submission.title);
	let metaTitle = getMetaTitle(submission.selftext.toString());
	let metaSubtitle = getMetaSubtitle(submission.selftext.toString());
	getMetaTitle(submission.selftext.toString());
	request.post(postUrl, { json: {
		url: submission.url,
		author: submission.author.name,
		title: title,
		content: submission.selftext_html,
		metaTitle: metaTitle,
		metaSubtitle: metaSubtitle
	}});
};

function getMetaTitle(content) {
	let lines = content.toString().split('\n');
	for (let i = 0; i < lines.length; i++) {
		let metaDataStructure = lines[i].split(':');
		let key = metaDataStructure[0];
		let value = metaDataStructure[1].trim();
		if (value == null) {
			continue;
		}
		if (!isTitleKey(key)) {
			continue;
		}
		return value;
	}
}

function getMetaSubtitle(content) {
	let lines = content.toString().split('\n');
	for (let i = 0; i < lines.length; i++) {
		let metaDataStructure = lines[i].split(':');
		let key = metaDataStructure[0];
		let value = metaDataStructure[1].trim();
		if (value == null) {
			continue;
		}
		if (!isSubtitleKey(key)) {
			continue;
		}
		return value;
	}
}

function isTitleKey(key) {
	if (key === 'title') {
		return true;
	}
	return false;
}

function isSubtitleKey(key) {
	if (key === 'subtitle') {
		return true;
	}
	return false;
}

function postIsEmpty(post) {
	if (post === '') {
		return true;
	}

	return false;
}

function postContainsStar(title) {
	if (title.substring(0, 1) !== '*') {
		return false;
	}
	return true;
}

function removeStar(title) {
	if (title == null) {
		return null;
	}
	if (title.charAt(0) === '*') {
		return title.substring(1, title.length);
	}

	return title;
}

module.exports = redditData;
