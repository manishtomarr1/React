import styled from 'styled-components'; //for using styled component
import React from 'react';
import styles from './Button.module.css' // for css module

// const Button = styled.button `
// width:100%;

//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width : 768px){ //eske badh means 768 se large screen pe 
//     width:auto;
//   }


// &:focus { //use & for telling jab button pae focous ho toh
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// `// we use this syntax here and yha button se alag kuch bhi html element lga sakte hai hum 
//sbke methods hai inbuilt styled-component package mae.

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

//what is const Button = styled.button `` ?
//this is the attacked template literal
//esme hum kuch bhi css file or css code dal sakte hai jisse jb bhi koi css apply ho toh usi
//component k usi tag pae go kise or pae na ho
//jaise man k chalo k class kinhi 1 se jayda element pae lag rhi hai toh css sbhi pae lagege
//aisa krne se kewal jisko hum  styled. k aage likhenge kewal usi pae lagege.
//or jo props.onclick wagera the wo bhi automatically call ho jayenge.

//what is styled component?
//styled component is the component by which we can dynamic changes to our html tags
//it has inbuilt packages for all of the html tags like button h1 h2 h3 p etc.

//what is styles.button here?
//if we use the css module in the component then first we import styles and .module.css file
//then in our component we can use the dynamically added class like we add the dynamic class
//in button in{}.