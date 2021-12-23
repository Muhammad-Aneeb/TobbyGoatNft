import React from 'react'
import './FollowTwitter.css'
import { Button } from "antd";

function FollowTwitter() {
    return (
        <div>
            <div className='FollowMainDiv'>
                <div>
                    <h3 style = {{color:"white"}}>Follow us on Twitter!</h3>
                </div>
                <div>
                    <h5 style = {{color:"white"}}>Don't lose any activity from Toby.</h5>
                </div>
                <div style={{marginTop:".5rem"}}>
                <Button style={{height:"2.3rem"}} type="primary">JOIN TWITTER</Button>
                </div>
            </div>
        </div>
    )
}

export default FollowTwitter
