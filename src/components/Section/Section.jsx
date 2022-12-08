import PropTypes from 'prop-types';
import {SectionBlock,SectionTitle} from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBlock>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
