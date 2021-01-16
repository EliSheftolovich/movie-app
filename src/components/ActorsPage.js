import React from 'react';
import { CardColumns, CardDeck } from 'react-bootstrap';
import ActorCard from '../data-models/ActorCard';
import './ActorsPage.css';


class ActorsPage extends React.Component{
    constructor(props){
        super(props);

        
    }
    render(){
        
        return(
            <CardDeck >
            <ActorCard Fname="Tom" Lname="Cruise" dob={'1962, Jul 3'} 
            actorsPic="https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg" 
            imdbLink="https://www.imdb.com/name/nm0000129/?ref_=nm_mv_close"/>

            <ActorCard Fname="Anthony " Lname="Hopkins " dob={'1937,  December 31'} 
            actorsPic="https://m.media-amazon.com/images/M/MV5BMTg5ODk1NTc5Ml5BMl5BanBnXkFtZTYwMjAwOTI4._V1_UY317_CR6,0,214,317_AL_.jpg" 
            imdbLink="https://www.imdb.com/name/nm0000164/?ref_=fn_al_nm_1"/>
            
            <ActorCard Fname="Sandra" Lname="Bullock" dob={'1964, Jul 26'} 
            actorsPic="https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY317_CR1,0,214,317_AL_.jpg" 
            imdbLink="https://www.imdb.com/name/nm0000113/?ref_=nv_sr_srsg_0"/>


            </CardDeck>

        )
    }
}



export default ActorsPage;