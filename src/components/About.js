import React from 'react';
import Columns from '../components/ui/Columns';
import Column from '../components/ui/Column';
import ProfileCard from '../components/ProfileCard';
import TechCard from '../components/TechCard';

const frontList = [
  { label: 'JavaScript'},
  { label: 'TypeScript'},
  { label: 'CSS'},
  { label: 'React'},
  { label: 'Vue'},
  { label: 'Bootstrap'},
  { label: 'materialUI'},
  { label: 'Gatsby'},
  { label: 'XML'},
  { label: 'HTML'},
];

const backList = [
  { label: 'PHP'},
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
                <TechCard title="FRONT END" img="https://icon-library.com/images/web-dev-icon/web-dev-icon-21.jpg" list={frontList} />
              </Column>
              <Column side="half">
                <TechCard title="BACK END" img="https://www.yourplantedroots.com/wp-content/uploads/2019/07/backend.png" list={backList} />
              </Column>
            </Columns>
          </Column>
        </Columns>
      </div>
    </section>
  );
};

export default About;