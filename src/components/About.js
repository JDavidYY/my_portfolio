import React from 'react';
import Columns from '../components/ui/Columns';
import Column from '../components/ui/Column';
import ProfileCard from '../components/ProfileCard';
import TechCard from '../components/TechCard';

const frontList = [
  { label: 'JavaScript'},
  { label: 'TypeScript'},
  { label: 'CSS'},
  { label: 'Angular'},
  { label: 'React'},
  { label: 'Bootstrap'},
  { label: 'materialUI'},
  { label: 'Gatsby'},
  { label: 'XML'},
  { label: 'HTML'},
];

const backList = [
  { label: 'Node'},
  { label: 'Python'},
  { label: 'Odoo'},
  { label: 'Docker'},
  { label: 'Flask'},
  { label: 'Express'},
  { label: 'Django'},
];

const About = () => {
  return (
    <section className="section bg-gray-100">
      <div className="container mx-auto">
        <Columns>
          <Column side="left">
            <ProfileCard />
          </Column>
          <Column side="right">
            <Columns>
              <Column side="half">
                <TechCard title="FRONT END" img="https://renzocorredor.com/wp-content/uploads/2020/07/Recurso-1.png" list={frontList} />
              </Column>
              <Column side="half">
                <TechCard title="BACK END" img="https://i.pinimg.com/originals/a9/88/6f/a9886fa9e8f6f0ddce4dfd264a1b21ed.png" list={backList} />
              </Column>
            </Columns>
          </Column>
        </Columns>
      </div>
    </section>
  );
};

export default About;