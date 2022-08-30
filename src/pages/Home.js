import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar'
import SearchBox from '../components/SearchBox/SearchBox'
import Sections from '../components/Sections/Sections'
import styled from "styled-components";


function Home() {
  return (
    
    <Container>
       <Sections
        title="Designed by parents "
        description="The free, all-in-one resource to share your family's photos and videos."
        backgroundImage="babyAvery.jpg"
        leftButtonText="Start Now"
        rightButtonText="Learn More"
        showDownArrow
      />
      <Sections
        title="Designed For Families"
        description="Capture moments, memories, ideas, and inspiration in a photo-sharing app that is perfect for families."
        backgroundImage="baby001.jpeg"
        leftButtonText="Start Now"
        rightButtonText="Learn More"
        showDownArrow
      />
      <Sections
        title="Easy Search"
        description="Experience a different month with every swipe. Look back on the joys of childhood."
        backgroundImage="baby002.jpeg"
        leftButtonText="Start Now"
        rightButtonText="Learn More"
        showDownArrow
      />
      <Sections
        title="Family Reactions & Responses"
        description="Relive memories through a new lens with comment and reactions from loved ones."
        backgroundImage="baby003.jpeg"
        leftButtonText="Start Now"
        rightButtonText="Learn More"
        showDownArrow
      />
      <Sections
        title="Free Unlimited Storage"
        description="Upload your family photos and videos at high speed, with no fees or storage limits."
        backgroundImage="baby004.jpeg"
        leftButtonText="Start Now"
        rightButtonText="Learn More"
        showDownArrow
      />
      <Sections
        title="Share unmissable moments"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="baby006.jpeg"
        leftButtonText="Start Now"
        rightButtonText="Learn More"
        showDownArrow
      />
      <Sections
        title="
        Accessible everywhere"
        description="The whole family can use Niu Niu to privately share photos online; on a phone, a tablet or a computer."
        backgroundImage="baby007.jpeg"
        leftButtonText="Start Now"
        rightButtonText="Learn More"
        showDownArrow
      />
      <Sections
        title="Easy Upload"
        description="Have old photos and videos lying around on your digital camera or computer? you can upload them with just the touch of a button."
        backgroundImage="baby008.jpeg"
        leftButtonText="Start Now"
        rightButtonText="Learn More"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;
