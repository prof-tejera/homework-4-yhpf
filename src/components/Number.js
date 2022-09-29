const Number = ({ value, onClick, className }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <div>
      <button onClick={onClick} value={value} className={className}>{value}</button>
    </div>
  );
};

export default Number;
