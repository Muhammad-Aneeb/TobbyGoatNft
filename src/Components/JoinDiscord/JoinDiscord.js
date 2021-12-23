import React from 'react'
import './JoinDiscord.css'
import { Button } from "antd";

function JoinDiscord() {
    return (
        <div>
            <div className='DiscordMainDiv'>
                <div style={{marginBottom:".5rem"}}>
                    <h3 style = {{color:"white"}}>Interact with the community</h3>
                </div>
                <div style={{marginTop:".5rem",marginBottom:".5rem"}}>
                    <h5 style = {{color:"white"}}>Join our Discord and don't miss all the giveaways and contests to win a TOBY THE GOAT NFT</h5>
                </div>
                <div style={{marginTop:".5rem"}}>
                <Button style={{height:"2.3rem"}} type="primary">JOIN DISCORD</Button>
                </div>
            </div>
        </div>
    )
}

export default JoinDiscord
