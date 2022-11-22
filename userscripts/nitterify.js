// ==UserScript==
// @name		 Nitterify
// @namespace	 *
// @version		 0.1
// @description  Redirect twitter.com links to nitter.net
// @author		 DarkWiiPlayer
// @match		 https://*/*
// @icon		 https://nitter.net/favicon.ico
// @grant		 none
// ==/UserScript==

(function() {
	'use strict';

	const nitterify = element => {
		element
			.querySelectorAll('a[href^="https://twitter.com"]')
			.forEach(link => { link.href = link.href.replace("twitter.com", "nitter.net") })
	}

	const observer = new MutationObserver(list => {
		list.forEach(mutation => {
			mutation.addedNodes.forEach(nitterify)
		})
	})

	nitterify(document)
	observer.observe(document, { childList: true, subtree: true })
})();
