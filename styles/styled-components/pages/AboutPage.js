import styled from "styled-components"

const AboutPage = styled.div`
    display: block;
    width: 100%;

    .__content {
        display: block;
        width: 90%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 50px 0;

        h1 {
            display: block;
            width: 100%;
            line-height: 50px;
            font-size: 40px;
            font-family: serif;
            text-align: left;
            color: #222;
            margin-bottom: 50px;

            code {
                color: #8a2be2;
            }

            @media screen and (max-width: 700px){
                line-height: 40px;
                font-size: 30px;
            }
        }

        h2 {
            display: block;
            width: 100%;
            line-height: 40px;
            font-size: 30px;
            font-family: serif;
            text-align: left;
            color: #222;
            margin-bottom: 50px;

            code {
                color: #8a2be2;
            }

            @media screen and (max-width: 700px){
                line-height: 32px;
                font-size: 25px;
            }
        }

        p {
            display: block;
            width: 100%;
            line-height: 25px;
            font-size: 16px;
            text-align: left;
            color: #444;
            font-family: serif;
            font-weight: normal;
            margin-bottom: 50px;

            &:last-of-type {
                margin-bottom: 0;
            }

            a {
                color: #8a2be2;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        img {
            display: block;
            width: 100%;
        }

        .youtube__video {
            display: block;
            width: 100%;
            position: relative;
            background: #000;

            &::before {
                content: "";
                display: block;
                width: 100%;
                padding-bottom: 56%;
                position: relative;
                z-index: 1;
            }

            iframe {
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 2;
                top: 0;
                left: 0;
            }
        }
    }
`

export default AboutPage