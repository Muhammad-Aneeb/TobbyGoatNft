import React from 'react'
import './LandingPage.css'
import Navbarr from '../../Components/Navbar/Navbarr'
import FirstPart from '../../Components/FirstPart/FirstPart'
import TobyNft from '../../Components/TobyNft/TobyNft'
import AboutTobby from '../../Components/AboutTobby/AboutTobby'
import Collection from '../../Components/Collection/Collection'
import NftCards from '../../Components/Cards/NftCards'
import Rarity from '../../Components/Rarity/Rarity'
import FollowTwitter from '../../Components/FollowTwitter/FollowTwitter'
import ProjectTobby from '../../Components/ProjectTobby/ProjectTobby'
import JoinDiscord from '../../Components/JoinDiscord/JoinDiscord'
import TeamTobby from '../../Components/TeamTobby/TeamTobby'
import TobbyFAQs from '../../Components/TobbyFAQs/TobbyFAQs'
import Footerr from '../../Components/Footerr/Footerr'
function LandingPage() {
    return (
        <div>
            <Navbarr/>
            <FirstPart/>
            <TobyNft/>
            <AboutTobby/>
            <Collection/>
            <NftCards/>
            <Rarity/>
            <FollowTwitter/>
            <ProjectTobby/>
            <JoinDiscord/>
            <TeamTobby/>
            <TobbyFAQs/>
            <Footerr/>
        </div>
    )
}

export default LandingPage
