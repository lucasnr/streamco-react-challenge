import React from 'react';

import {
	Wrapper,
	Container,
	Links,
	Link,
	Copyright,
	Bottom,
	SocialNetworks,
	SocialNetwork,
	Stores,
	Store
} from './styles';

import facebook from '../../assets/img/social/facebook-white.svg';
import twitter from '../../assets/img/social/twitter-white.svg';
import instagram from '../../assets/img/social/instagram-white.svg';
import appStore from '../../assets/img/store/app-store.svg';
import playStore from '../../assets/img/store/play-store.svg';
import microsoft from '../../assets/img/store/windows-store.svg';

export default function Footer() {
	return (
		<Wrapper>
			<Container>
				<Links>
					<Link to="/">Home</Link>
					<Link to="/">Terms and conditions</Link>
					<Link to="/">Privacy Policy</Link>
					<Link to="/">Collection Statement</Link>
					<Link to="/">Help</Link>
					<Link to="/">Manage Account</Link>
				</Links>

				<Copyright>
					Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
				</Copyright>

				<Bottom>
					<SocialNetworks>
						<SocialNetwork href="https://facebook.com">
							<img src={facebook} alt="Logomarca do Facebook" />
						</SocialNetwork>
						<SocialNetwork href="https://twitter.com">
							<img src={twitter} alt="Logomarca do Twitter" />
						</SocialNetwork>
						<SocialNetwork href="https://instagram.com">
							<img src={instagram} alt="Logomarca do Instagram" />
						</SocialNetwork>
					</SocialNetworks>

					<Stores>
						<Store href="https://apple.com/ios/app-store/">
							<img src={appStore} alt="Logomarca da App Store" />
						</Store>
						<Store href="https://play.google.com">
							<img src={playStore} alt="Logomarca da App Store" />
						</Store>
						<Store href="https://microsoft.com">
							<img src={microsoft} alt="Logomarca da App Store" />
						</Store>
					</Stores>
				</Bottom>
			</Container>
		</Wrapper>
	);
}
