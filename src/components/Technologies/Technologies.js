import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  
  <div>
    <Section nopadding id="technologies">
      <SectionDivider />  
      <SectionTitle main>Skills</SectionTitle>
      <List>
        <ListItem>
          <ListContainer>
            <ListTitle>Data Science</ListTitle>
            <ListParagraph>-Python</ListParagraph>
            <ListParagraph>-SQL</ListParagraph> 
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>Front End</ListTitle>
            <ListParagraph>-HTML/CSS/JS</ListParagraph>
            <ListParagraph>-React.js</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>Other</ListTitle>
            <ListParagraph>-C++</ListParagraph>
            <ListParagraph>-Git</ListParagraph>
            <ListParagraph>-Fluent English/Portuguese</ListParagraph>
            <ListParagraph>-Advanced Spanish/French</ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider /> 




    </Section>
  </div>
);

export default Technologies;
