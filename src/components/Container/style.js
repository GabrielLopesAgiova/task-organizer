import styled from "styled-components"

export const StyledContainer = styled.div`
    position: relative;
    width: 95vw;
    height: 95vh;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.colors.whiteBg};
    box-shadow: 2px 2px 8px ${({theme}) => theme.colors.gray};
    overflow: auto;
`
export const StyledContainerNull = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    text-align: center;
`