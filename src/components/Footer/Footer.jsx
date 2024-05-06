import React from 'react';

const Footer = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <footer>
                    <table>
                        <tr>
                            <td>
                                <img src="/dist/imgs/kakao.jpeg" alt="kakao" width="50" height="50" />
                            </td>
                            <td>
                                <a href="http://pf.kakao.com/_IxbTkG"> @unis</a>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <img src="/dist/imgs/insta.jpg" alt="instagram" width="50" height="50" />
                            </td>
                            <td>
                                <a href="https://www.instagram.com/unis_ewha?igsh=Z3BsN281Mmt2YnZu"> Instagram @unis_ewha</a>
                            </td>
                        </tr>
                    </table>
                    <p></p>
                    <p>Copyright © UNIS. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default Footer;
