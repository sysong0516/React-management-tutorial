import './App.css';
import Customer from './components/Customer';
import React, {Component} from 'react';
const customer=[{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'송상윤',
  'birthday':'000516',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'박민환',
  'birthday':'000516',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'김진성',
  'birthday':'000516',
  'gender':'남자',
  'job':'대학생'
}
]
class App extends Component{
  render() {
    return (
      <div>
        {
          customer.map(c=>{
            return(
              <Customer
                key={c.id}//map을 이용한 반복문을 사용할때는 key값을 설정해주어야 자바스크립트에서 오류를 출력하지않는다
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
      
    );
  }
}


export default App;
