import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent(){
    
    return (
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/KnumAWWWgUE/maxresdefault.jpg" />
            <TitleContainer>
                <ChannelImage>
                    JC
                </ChannelImage>
                <TextContainer>
                    <Title>Playboi Carti - Sky [Official Video]</Title>
                    <TextCard>Playboi Carti</TextCard>
                    <TextCard>1,9 bi de visualizações - há 1 ano</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;