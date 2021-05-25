import React from 'react'
import '../css-styling/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccount from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccount} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avtaar="https://lh3.googleusercontent.com/PPOMX7JDBhSKnBpFBbOgjcKLrJdLKb04Z4hBENXLwXhD2O_yEEWpI4Ac4GJTx7wdnL7MqbMqeNt4pJlkPxOd1ihbKKD9bHf7kVaSs5JFsMDzhkZmwlnGYn_j5PgDlOOx7RuN4cEUQ-CiNQRMM-kBfAKe6ZZVm0kmunSoyCj9OMVhlNXblTyOztj7P05hKQ9TbfdqICC9TGHWIPPFe4GFsAOynkSZ4OnBMpSIVAsxG92B6zmrY1DHt3aRao7Of3gbjullmWghZcVAemOHpi8W_bc9Je6-2sJgm6zpGl085k-PGQGXgvaRibiYA4aaV9n3m3817n-hD-1WeU2bnZ7LgqpmliOzSuW829a6glEB9uCyd-7kf-iW4F31PEQZhaKEEomT0ul6cRgG1pl8xxoq2O3rEqB9Id8-BFshpHUSqMH8lduSNWoLO6KCHFoZiFYjbAOUH3Zt3243egEyvd0JlmBF9j2aELmf3QnSkkbLegOY2qdn5smQM8o40b1rfYAMgkkKObHj7E0VV_YqJ7Wlht8JiH7NMy5jcSsrndzz_JlYayQ1epqPWv5Vd0sloOFo0x8XngX3uoS_ZjyW-zFyam0QJiQJvMe-jrQGrbA5imZxWWZc7voaGQMZcP1Pns-01LD93_cVyrmwdw_pR4w2HK7W2v-R0muHUS_bFYYTkpqH950SYlbtn3pVvo8cvXKkI6-ET9E88I9ZypOHHZufRLA=w923-h943-no?authuser=0" title="Me"/>
            </div>
        </div>
    )
}

export default Header
