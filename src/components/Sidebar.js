import React from 'react'
import '../css-styling/Sidebar.css';
import {Avatar} from '@material-ui/core'
function Sidebar() {


    const recentItem = (topic) => {
        return (<div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
    }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1460411794035-42aac080490a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                <Avatar src="https://lh3.googleusercontent.com/PPOMX7JDBhSKnBpFBbOgjcKLrJdLKb04Z4hBENXLwXhD2O_yEEWpI4Ac4GJTx7wdnL7MqbMqeNt4pJlkPxOd1ihbKKD9bHf7kVaSs5JFsMDzhkZmwlnGYn_j5PgDlOOx7RuN4cEUQ-CiNQRMM-kBfAKe6ZZVm0kmunSoyCj9OMVhlNXblTyOztj7P05hKQ9TbfdqICC9TGHWIPPFe4GFsAOynkSZ4OnBMpSIVAsxG92B6zmrY1DHt3aRao7Of3gbjullmWghZcVAemOHpi8W_bc9Je6-2sJgm6zpGl085k-PGQGXgvaRibiYA4aaV9n3m3817n-hD-1WeU2bnZ7LgqpmliOzSuW829a6glEB9uCyd-7kf-iW4F31PEQZhaKEEomT0ul6cRgG1pl8xxoq2O3rEqB9Id8-BFshpHUSqMH8lduSNWoLO6KCHFoZiFYjbAOUH3Zt3243egEyvd0JlmBF9j2aELmf3QnSkkbLegOY2qdn5smQM8o40b1rfYAMgkkKObHj7E0VV_YqJ7Wlht8JiH7NMy5jcSsrndzz_JlYayQ1epqPWv5Vd0sloOFo0x8XngX3uoS_ZjyW-zFyam0QJiQJvMe-jrQGrbA5imZxWWZc7voaGQMZcP1Pns-01LD93_cVyrmwdw_pR4w2HK7W2v-R0muHUS_bFYYTkpqH950SYlbtn3pVvo8cvXKkI6-ET9E88I9ZypOHHZufRLA=w923-h943-no?authuser=0" className="sidebar__avatar" />
                <h2>Chirag Lalwani</h2>
                <h4>lalwanichirag3@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">20</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on your Post</p>
                    <p className="sidebar__statNumber">20</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Reactjs')}
                {recentItem('Redux')}
                {recentItem('Material-UI')}
                {recentItem('Firebase')}
            </div>
        </div>
    )
}

export default Sidebar
