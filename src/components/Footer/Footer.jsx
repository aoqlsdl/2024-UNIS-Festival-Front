import React from 'react';

const Footer = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <img src="/public/imgs/footer.webp" alt="footer image" width="900rem" height="30" />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%' }}>
                <footer>
                    <table style={{ alignSelf: 'flex-start', marginLeft: '2rem', borderCollapse: 'collapse' }}>
                        <tr>
                            <td style={{ textAlign: 'left', padding: '5px 0' }}>
                                <p style={{ color: 'black', margin: 0 }}>FOLLOW US</p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '5px 0' }}>
                                <a href="https://www.instagram.com/unis_ewha?igsh=Z3BsN281Mmt2YnZu" style={{ color: 'black', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                    <img src="/public/icons/insta.svg" alt="instagram" width="41" height="41" style={{ marginRight: '5px' }} />
                                    <span style={{ marginTop: '-3px' }}>instagram (@unis_ewha)</span>
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table style={{ alignSelf: 'flex-start', marginLeft: '2rem', borderCollapse: 'collapse' }}>
                        <tr>
                            <td style={{ textAlign: 'left', padding: '5px 0' }}>
                                <p style={{ color: 'black', margin: 0 }}>문의하기</p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '5px 0' }}>
                                <a href="http://pf.kakao.com/_IxbTkG" style={{ color: 'black', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                    <img src="/public/icons/kakao.svg" alt="kakaotalk" width="50" height="50" style={{ marginRight: '5px' }} />
                                    <span style={{ marginTop: '-3px' }}>kakaotalk (@unis)</span>
                                </a>
                            </td>
                        </tr>
                    </table>
                </footer>
            </div>
            <img src="/public/imgs/footer.webp" alt="footer image" width="900rem" height="30" />
            <p style={{ wordWrap: 'break-word' }}>COPYRIGHT ⓒ 이화여자대학교 중앙실전창업학회 (@unis_ewha) UNIS ALL RIGHTS RESERVED</p>
        </div >
    );
};

export default Footer;
