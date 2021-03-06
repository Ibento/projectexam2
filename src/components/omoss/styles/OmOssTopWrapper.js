

import styled from 'styled-components';
import omOssTopBackground from '../../../images/omoss_top_background.jpg';
import { dropShadow } from '../../common/mixins';

export const OmOssTopWrapper = styled.div`

    background-image: url(${omOssTopBackground});
    background-size: cover;
    background-repeat: no-repeat;
    ${dropShadow('5px', '5px', '5px')};

    div.content {
        
        padding: 200px 40px;
        @media screen and (max-width: 415px) {
            padding: 50px 0 20px 0;
        }

        img {
            width: 100%;
        }
    }

`;