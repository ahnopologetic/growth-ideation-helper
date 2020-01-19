import React from 'react'
import styled from 'styled-components';
import { GrowthButton } from './GrowthButton';

type Props = {
    index: number;
    totalLength: number;
    handleNext: () => void;
    handlePrev: () => void;
    children: JSX.Element[];
}
export const GrowthSlide = React.memo(({ children, index, handleNext, handlePrev, totalLength }: Props) => {
    const isInitialSlide = index === 0;
    const isFinalSlide = index === totalLength - 1;
    const NextButtonIfNeeded = !isFinalSlide ? <GrowthButton buttonText='다음' handleClick={handleNext} /> : ''
    const PrevButtonIfNeeded = !isInitialSlide ? <GrowthButton buttonText='이전' handleClick={handlePrev} /> : ''
    return (
        <SlideContainer>
            <div>
                {children}
            </div>

            <ButtonContainer>
                {NextButtonIfNeeded}
                {PrevButtonIfNeeded}
            </ButtonContainer>

        </SlideContainer>
    );
})

const SlideContainer = styled.div`
    @keyframes rotateIn {
        0% {
            opacity: 0;
        }   
        100% {
            opacity: 1;
        }
    }
    animation: rotateIn 500ms ease-in forwards;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`