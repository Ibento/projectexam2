import styled from 'styled-components';

import bgImage from '../../../images/whereis_background.png';
import bgImageTablet from '../../../images/mobile_whereis_background.png';
import bgImageMobile from '../../../images/mobile_whereis_background_415.png';

import nyYorkColors from '../../constants/colors';

export const WhereIsWrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    @media screen and (min-width: 1024px) {
        margin-bottom: 60px;
    }
    div.where_is_background {
        background: url(${bgImage});
        background-size:100%;      
        
        @media screen and (max-width: 1200px){
            background: url(${bgImageTablet});
            background-size:100%;  
            background-position-x: center;
            margin: 50px 0;
            width: 100%;
        }

        @media screen and (max-width: 768px){
            background-size: 130%  130%;

        }
        @media screen and (max-width: 415px){
            background: url(${bgImageMobile});
            padding-bottom: 400px;
            background-size: cover;
            background-repeat: no-repeat;
        }  
        
        background-repeat:no-repeat;
        position: relative;
        z-index: 10;
        
        div.content {
            padding: 80px 25px;
            @media screen and (max-width: 768px){
                
                padding: 40px 25px;
            }
             
            a {
                color: {nyYorkColors.pink} !important;
            }

          
            h2 {
                font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
                font-weight: 800;
                color: ${nyYorkColors.pink};
                font-size: 1.4rem;
                margin-bottom: 10px;
                @media screen and (max-width: 768px){
                    font-size: 2rem;
                    padding: 10px;
                }
                @media screen and (max-width: 415px){
                    font-size: 1.5rem;
                    padding: 10px;
                }
    
    
            }
            div {
                width: 40%;
                font-size: 0.9rem;
                color: ${nyYorkColors.black};
                font-weight: bold;

                a {
                    color: ${nyYorkColors.pink};
                }

                @media screen and (max-width: 1200px){
                    width:100%;
               
                    font-size: 1.5rem;
                }
                @media screen and (max-width: 415px){
                    font-size: 0.9rem;
                    padding: 10px;
                }
                @media screen and (max-width: 320px){
                    font-size: 0.9rem;
                }
            }

            @media screen and (max-width: 1200px){
                padding: 80px 150px;
            }
            @media screen and (max-width: 768px){
                padding: 50px 120px;
            }

            @media screen and (max-width: 415px){
                padding: 50px;
            }
        }

        &:after {
                padding-top: 5%;
                @media screen and (max-width: 1200px){ 
                    padding-top: 20%;
                }
                display: block;
                content: '';
        }

    
    }
 
`;
