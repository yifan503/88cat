import React from 'react'

function Footer (){
    return (
        <footer className="container offset-md-1" style={{marginTop:"200px"}}>
            <div className="row">
                <h1 className="display-3">Contact us</h1>
            </div>
            <div className="row mb-5">
                <div className="col-md-3">
                    social media<br />
                    wechat:xxx<br />
                    ins:xxxx<br />
                    red diary:xxx
                </div>
                <div className="col-md-3">
                    Contacts<br />
                    email:xxx@xxx.com<br />
                    customer service:xxx@xxx.com
                </div>
            </div>
        </footer>
    );
}

export default Footer;