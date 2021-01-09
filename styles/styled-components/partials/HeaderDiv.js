import styled from "styled-components"

const HeaderDiv = styled.div`
    display: block;
    width: 100%;
    background: #222;
    text-align: left;

    .sub__container {
        display: block;
        width: 90%;
        max-width: 1000px;
        margin: 0 auto;
        position: relative;

        .__title {
            display: inline-block;
            vertical-align: middle;
            line-height: 70px;
            font-family: sans-serif;
            font-size: 25px;
            color: #fff;
            font-weight: 700;
            cursor: pointer;

            span {
                color: #ff0;
            }
        }

        nav {
            display: inline-block;
            vertical-align: middle;
            position: absolute;
            top: 0;
            right: 0;
            text-align: right;
            padding: 15px 0;

            a {
                display: inline-block;
                vertical-align: middle;
                line-height: 40px;
                font-family: sans-serif;
                font-weight: 400;
                color: #ddd;
                margin-right: 20px;

                &:last-of-type {
                    margin-right: 0;
                }

                &:hover,
                &.active {
                    color: #ff0;
                }
            }
        }
    }
`

export default HeaderDiv