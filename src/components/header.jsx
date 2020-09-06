import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-image: url('/hero-1.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    height: 100vh;
    .hero-box {
        position: absolute;
        top: 40%;
        left: 20%;
        color: #fff;
    }
`;

export const Header = () => {
    return (
        <StyledHeader>
            <div className="hero-box">
                <h1>Valley Area Music</h1>
                <p>An independent record label founded by AR Viralz in 2017 and based in Dehradun City, India.</p>
            </div>
        </StyledHeader>
    )
}
