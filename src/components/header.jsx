import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/hero-1.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    height: 100vh;
    .hero-box {
        position: absolute;
        top: 32%;
        left: 15%;
        color: #fff;
    }
    h1 {
        font-size: 4.5em;
    }
    button {
        margin-top: 1em;
        font-size: 1em;
        background-color: transparent;
        border: 2px #6CCFF6 solid;
        border-radius: 200px;
        padding: 8px 22px;
        color: #fafafa;
    }
    button:hover {
        background-color: #6CCFF6;
        cursor: pointer;
        color: #001011;
        transition: 0.3s all;
    }
`;

export const Header = () => {
    return (
        <StyledHeader>
            <div className="hero-box">
                <h1>Valley Area Music</h1>
                <p>An independent record label founded by AR Viralz  in 2017 <br/> and based in Dehradun City, India.</p>
                <button>View More</button>
            </div>
        </StyledHeader>
    )
}
