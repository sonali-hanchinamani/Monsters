//import { Component } from "react";

import Card from '../card-list/card.component'

    const CardList = ({ monsters }) => (
      <div className='card-list'>
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
            
//           return ( <Card monster={monster}/>
           
//           );
//         })}
//       </div>
//     );
//   }
// }
export default CardList;
