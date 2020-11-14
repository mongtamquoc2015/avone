import React, { useState, useEffect } from 'react'
import { Container, Icon } from './SiteScrollStyles'

const SiteScroll = () => {
	const [isShowSiteScroll, setIsShowSiteScroll] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
				setIsShowSiteScroll(true);
			} else {
				setIsShowSiteScroll(false);
			}
		};
	});

	const upToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	return (
		<Container onClick={upToTop} isShowSiteScroll={isShowSiteScroll}>
			<Icon>
				<i class="fas fa-arrow-up"></i>
			</Icon>
		</Container>
	)
}

export default SiteScroll;