import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  height: 600px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #c6c7c838;
`;
const MainCard = styled.div`
    width: 800px;
    height: 250px;
    display: flex;
    border-radius: 10px;
`;
const BackgroundImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
    border-radius: 30px;
    border: 1px solid black;
`;
const Title = styled.h1`
    position: absolute;
    top: 150px;
    left: 405px;
    color: red;
    font-size: 34px;
`;

const CardContainer = styled.div`
    display: flex; 
`;

const Card = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    margin:10px;
    border: 1px solid black;
    border-radius: 10px;
`;
const CardImage = styled.img`
    height: 50%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const Parag = styled.p`
    font-size: 16px;
    margin: 10px;
`;

function homePage() {
    return (
        <Container>
            <MainCard>
                <BackgroundImage src="https://staticv4.imgix.net/images/cover_hero_home_desktop_colosseo.png" alt="Background Image"/>
                <Title>Biglietti e tanto altro</Title>          
            </MainCard>
            <CardContainer>
                <Card> 
                    <CardImage src="https://images.musement.com/cover/0002/51/thumb_150564_cover_header.jpeg?lossless=false&auto=format&fit=crop&h=155&w=335" alt="Card Image"/>
                    <Parag>Lorem ipsum</Parag>
                </Card>
                <Card>
                    <CardImage src="https://images.musement.com/cover/0105/79/thumb_10478967_cover_header.jpeg?lossless=false&auto=format&fit=crop&h=155&w=335" alt="Card Image"/>
                    <Parag>Lorem ipsum</Parag>
                </Card>
                <Card>
                    <CardImage src="https://images.musement.com/cover/0104/63/thumb_10362801_cover_header.jpeg?lossless=false&auto=format&fit=crop&h=155&w=335" alt="Card Image"/>
                    <Parag>Lorem ipsum</Parag>
                </Card>
            </CardContainer>
        </Container>

    )
}

export default homePage;