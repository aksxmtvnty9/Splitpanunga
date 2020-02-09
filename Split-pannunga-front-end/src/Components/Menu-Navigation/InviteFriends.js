import React from 'react'

function InviteFriends(){
    return (
        <div className="invite-friends">
            <p className="invite-p">Invite friends</p>
            <div className="invite-friends-inside">
                <input className="input-field" type="text" placeholder="Enter an email address" />
                <button className="input-btn">Send invite</button>
            </div>
            
        </div>
    );
}

export default InviteFriends