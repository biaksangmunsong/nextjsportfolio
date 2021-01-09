import styled from "styled-components"

const HomePage = styled.div`
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

        .image__wrapper {
            display: block;
            width: 100%;
            position: relative;
            margin-bottom: 50px;

            &.not-optimized {
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }

            &.optimized {
                div {
                    z-index: 2;
                }

                &::after {
                    content: "";
                    display: block;
                    width: 100%;
                    padding-bottom: 56%;
                    position: relative;
                    z-index: 1;
                }
            }
        }

        .__paragraph {
            display: block;
            width: 100%;
            line-height: 25px;
            font-size: 16px;
            text-align: left;
            color: #444;
            font-family: serif;
            font-weight: normal;

            a {
                color: #8a2be2;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`

export default HomePage