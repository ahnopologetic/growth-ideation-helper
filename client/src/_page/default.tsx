import React from 'react'
import styled from 'styled-components'

export const DefaultPageView: React.FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`