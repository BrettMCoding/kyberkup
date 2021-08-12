import React from 'react'

const Schedule = () => {
    return (
        <div className="Item Flex50">
            <h2 className="Title">SCHEDULE</h2>
        <div className="Item-content">
        <p className="Item-p">Saturday schedule:
</p>
<ul>
    <li>
        0800-0845	Player check-in, table assignments
    </li>
    <li>
        0845-0900	Player Meeting
    </li>
    <li>
        0900-1145	Round 1
    </li>
    <li>
        1145-1200	Report scores, new pairings and table assignments
    </li>
    <li>
        1200-1300	Lunch, Paint Judging
    </li>
    <li>
        1300-1545	Round 2
    </li>
    <li>
        1545-1600	Report scores, new pairings and table assignments
    </li>
    <li>
        1600-1845	Round 3
    </li>
    <li>
        1845-1900	Report scores, new pairings and table assignments for Sunday 
    </li>
</ul>

<p className="Item-p">
Sunday schedule:
</p>
<ul><li>
    0845-0900	Player Meeting
</li>
<li>
    0900-1145	Round 4
</li>
<li>
    1145-1200	Report scores, new pairings and table assignments
</li>
<li>
    1200-1300	Lunch, Paint Judging
</li>
<li>
    1300-1545	Round 5
</li>
<li>
    1545-1600	Report scores, new pairings and table assignments
</li>
<li>
    1600-1845	Round 6 (this round will be eliminated if there are no more than 32 players)
</li>
<li>
    1845-1900	Report scores, new pairings and table assignments for Sunday
</li>
<li>
    1900-1930	Awards, Prize Raffle, Final Announcements
</li>
</ul>
        </div>
        </div>
    )
}

export default Schedule
