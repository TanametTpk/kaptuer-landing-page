import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

.boxes {
    --size: 32px;
    --duration: 800ms;
    height: calc(var(--size) * 2);
    width: calc(var(--size) * 3);
    position: relative;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    margin-top: calc(var(--size) * 1.5 * -1);
    transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
    .box {
        width: var(--size);
        height: var(--size);
        top: 0;
        left: 0;
        position: absolute;
        transform-style: preserve-3d;
        &:nth-child(1) {
            transform: translate(100%, 0);
            animation: box1 var(--duration) linear infinite;
        }
        &:nth-child(2) {
            transform: translate(0, 100%);
            animation: box2 var(--duration) linear infinite;
        }
        &:nth-child(3) {
            transform: translate(100%, 100%);
            animation: box3 var(--duration) linear infinite;
        }
        &:nth-child(4) {
            transform: translate(200%, 0);
            animation: box4 var(--duration) linear infinite;
        }
        & > div {
            --background: #5C8DF6;
            --top: auto;
            --right: auto;
            --bottom: auto;
            --left: auto;
            --translateZ: calc(var(--size) / 2);
            --rotateY: 0deg;
            --rotateX: 0deg;
            position: absolute;
            width: 100%;
            height: 100%;
            background: var(--background);
            top: var(--top);
            right: var(--right);
            bottom: var(--bottom);
            left: var(--left);
            transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
            &:nth-child(1) {
                --top: 0;
                --left: 0;
            }
            &:nth-child(2) {
                --background: #4878E8;
                --right: 0;
                --rotateY: 90deg;
            }
            &:nth-child(3) {
                --background: #5080F0;
                --rotateX: -90deg;
            }
            &:nth-child(4) {
                --background: #DBE3F4;
                --top: 0;
                --left: 0;
                --translateZ: calc(var(--size) * 3 * -1);
            }
        }
    }
}

@keyframes box1 {
    0%,
    50% {
        transform: translate(100%, 0);
    }
    100% {
        transform: translate(200%, 0);
    }
}

@keyframes box2 {
    0%{
        transform: translate(0, 100%);
    }
    50% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(100%, 0);
    }
}

@keyframes box3 {
    0%,
    50% {
        transform: translate(100%, 100%);
    }
    100% {
        transform: translate(0, 100%);
    }
}

@keyframes box4 {
    0%{
        transform: translate(200%, 0);
    }
    50% {
        transform: translate(200%, 100%);
    }
    100% {
        transform: translate(100%, 100%);
    }
}

* {
    box-sizing: border-box;
    &:before,
    &:after {
        box-sizing: border-box;
    }
}

position: absolute;
top:0;
left:0;
width: 100vw;
height: 100vh;
font-family: Roboto, Arial;
color: #ADAFB6;
display: flex;
justify-content: center;
align-items: center;
background: #F9FBFF;

`

const Loader = () => {
    return (
        <Container>
            <div class="boxes">
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </Container>
    )
}

export default Loader
