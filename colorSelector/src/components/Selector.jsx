const Selector = ({value,onChange})=>{
    return (
        <select value={value} onChange={onChange}>
          <option value="">Choose a color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
      );
}

export default Selector;