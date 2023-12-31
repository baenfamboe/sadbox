window.onload = () => {
	let SVG = { // https://www.svgrepo.com/svg/508195/user https://www.svgrepo.com/svg/508198/users https://www.svgrepo.com/svg/507967/calendar
		user:      '<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill="#ffffff"></path> <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="#ffffff" stroke-width="2"></path> <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>',
		community: '<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z" fill="#ffffff"></path> <path d="M15.6309 7.15517C15.9015 7.05482 16.1943 7 16.4999 7C17.8806 7 18.9999 8.11929 18.9999 9.5C18.9999 10.8807 17.8806 12 16.4999 12C16.1943 12 15.9015 11.9452 15.6309 11.8448" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M3 19C3.69137 16.6928 5.46998 16 9.5 16C13.53 16 15.3086 16.6928 16 19" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M17 15C19.403 15.095 20.5292 15.6383 21 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z" stroke="#ffffff" stroke-width="2"></path> </g></svg>',
		date:      '<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M3 10.312C3 5.93757 3.93757 5 8.312 5H15.688C20.0624 5 21 5.93757 21 10.312V15.688C21 20.0624 20.0624 21 15.688 21H8.312C3.93757 21 3 20.0624 3 15.688V10.312Z" fill="#ffffff"></path> <path d="M3 10.312C3 5.93757 3.93757 5 8.312 5H15.688C20.0624 5 21 5.93757 21 10.312V15.688C21 20.0624 20.0624 21 15.688 21H8.312C3.93757 21 3 20.0624 3 15.688V10.312Z" stroke="#ffffff" stroke-width="2"></path> <path d="M6 5L6 3" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M18 5L18 3" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M7 9H17" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>'
	}
	for (post of content) {
		let article = document.createElement('article');
		article.innerHTML = `
			<header>
				<div class="post-info">
					<div>
						${SVG.user}
						${post.author}
					</div>
					<div>
						${SVG.community}
						${post.community ? post.community : ''}
					</div>
					<div>
						${SVG.date}
						<time> ${new Date(post.date).toLocaleString()} </time>
					</div>
				</div>
				<h2> ${post.title} </h2>
			</header>
			<section>
				${post.content.join('\n')}
			</section>`;
		document.querySelector('main').append(article);
	}
}
