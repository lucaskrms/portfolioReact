import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {ListParagraph} from './AboutStyles';

const About = () =>  (
  
    <div>
      <Section nopadding id="technologies">
        <SectionTitle main>About me</SectionTitle>
        <ListParagraph>
            My name is Lucas Kermessi, I am a 19-year-old brazilian
            that loves technology, currently I am working towards a B.Sc.
            Computer Science degree, learning everyday new things about the tech field.
            After I studied Artificial Intelligence at university I developed a huge interest in Machine Learning and Data Science
            in general, since then, I have been focusing on improving my knowledge about it.
            Besides that, my passions include AI, Linguistics, Geography and Engineering. And I specially like when these subjects overlaps.
        </ListParagraph>
        <br/>
        <br/>
        <br/>
        <SectionDivider /> 
  
  
  
      </Section>
    </div>
  );
  
  export default About;


