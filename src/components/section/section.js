import propTypes from 'prop-types';
export default function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
Section.propTypes = {
  title: propTypes.string.isRequired,
};
