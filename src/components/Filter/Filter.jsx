import css from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input className={css.filterInput} type="text" value={value} onChange={onChange} />
    </label>
  );
}


// class Filter extends Component {
//     filterInputId = nanoid();

//   render() {
//     return (
//       <label className={css.filterLabel} htmlFor={this.filterInputId}>
//         Find contacts by name
//         <input
//           className={css.filterInput}
//           id={this.filterInputId}
//           name="filter"
//           type="text"
//           value={this.props.value}
//           onChange={this.props.onChange}
//         />
//       </label>
//     );
//   }
// }

// export default Filter;
