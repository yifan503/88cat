import cat_stick from '../common/images/cat_stick.jpg'
import nc_chicken_strip from '../common/images/nc_chicken_strip.jpg'
import nc_shrimp_stick from '../common/images/nc_shrimp_stick.jpg'
import ynb_mahua from '../common/images/ynb_mahua.JPG'
import akq_bonito from '../common/images/akq_bonito.jpg'
import akq_chicken from '../common/images/akq_chicken.jpg'
import akq_salmon from '../common/images/akq_salmon.jpg'
import akq_tuna from '../common/images/akq_tuna.jpg'
import axia_tuna_clovefish from '../common/images/axia_tuna_clovefish.jpg'
import axia_tuna from '../common/images/akq_tuna.jpg'

function convertImage(num){
    switch(num){
        case 1 : return cat_stick;
        case 2 : return nc_chicken_strip;
        case 3 : return nc_shrimp_stick;
        case 4 : return ynb_mahua;
        case 5 : return akq_bonito;
        case 6 : return akq_chicken;
        case 7 : return akq_salmon;
        case 8 : return akq_tuna;
        case 9 : return axia_tuna_clovefish;
        case 10 : return axia_tuna;
        default : return cat_stick;
    }
    
}

export default convertImage