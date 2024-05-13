import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const members = [
  {
    id: 1,
    name: 'Abhay Singh',
    position: 'Backend Developer',
    image: '/logo2.jpg', 
    bio: 'Responsible for creating, maintaining, testing, and debugging the entire back end of an application or system. This includes the core application logic, databases, data and application integration, API, and other processes taking place behind the scenes'
  },
  {
    id: 2,
    name: 'Sumit Sawant',
    position: 'Backend Developer',
    image: '/logo2.jpg', 
    bio: 'Responsible for creating, maintaining, testing, and debugging the entire back end of an application or system. This includes the core application logic, databases, data and application integration, API, and other processes taking place behind the scenes'
  },
  {
    id: 3,
    name: 'Afzal Sidduiquie',
    position: 'UI/UX Designer',
    image: '/logo2.jpg', 
    bio: 'Responsible for applying interactive and visual design principles on websites and web applications for a positive and cohesive user experience'
  },
  {
    id: 4,
    name: 'Team Name',
    position: 'Error Makers',
    image: '/team2.jpg', 
    bio: 'Coming together is a beginning,kepping together is process,Working together is Success'
  }
];

const AboutUs = () => {
  const navigate = useNavigate(); 
  const handleNavigate = () => {
    navigate("/");  
  };
  return (
    <Container>
      <Logo onClick={handleNavigate}>
          <img src="./galaxy1.jpg" alt="" />
        </Logo>
      <Title>About Us</Title>
      <MembersContainer>
        {members.map(member => (
          <MemberCard key={member.id}>
            <MemberImage src={member.image} alt={member.name} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberPosition>{member.position}</MemberPosition>
              <MemberBio>{member.bio}</MemberBio>
            </MemberInfo>
          </MemberCard>
        ))}
      </MembersContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  text-align: center; /* Center the content */
`;

const Logo = styled.div`
    width:120px;
    margin-bottom: 20px;
    cursor: pointer;
    img{
        width: 100%;
    }
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 250px;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const MemberInfo = styled.div`
  text-align: center;
`;

const MemberName = styled.h2`
  margin: 5px 0;
`;

const MemberPosition = styled.p`
  margin: 5px 0;
  font-style: italic;
`;

const MemberBio = styled.p`
  margin: 10px 0;
  text-align: justify;
`;

export default AboutUs;
