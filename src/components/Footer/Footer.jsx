import * as s from './FooterStyles';

const Footer = () => {
	return (
		<>
			<s.FooterContainer>
				<s.Top>
					<s.LinkBox>
						<s.Title>FOLLOW US</s.Title>
						<s.Route>
							<s.Icon src="/icons/insta.svg" />
							<s.Link href="https://www.instagram.com/unis_ewha?igsh=Z3BsN281Mmt2YnZu">
								instagram(@unis_ewha)
							</s.Link>
						</s.Route>
					</s.LinkBox>
					<s.LinkBox>
						<s.Title>문의하기</s.Title>
						<s.Route>
							<s.Icon src="/icons/kakao.svg" className="kakao" />
							<s.Link href="http://pf.kakao.com/_IxbTkG">
								kakotalk(@unis)
							</s.Link>
						</s.Route>
					</s.LinkBox>
				</s.Top>
				<s.Down>
					<s.Copyright>
						COPYRIGHT ⓒ 이화여자대학교 중앙실전창업학회 (@unis_ewha) UNIS <br />
						ALL RIGHTS RESERVED
					</s.Copyright>
				</s.Down>
			</s.FooterContainer>
		</>
	);
};

export default Footer;
