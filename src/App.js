import './App.css';
import Customer from './components/Customer';
import React, {Component} from 'react';
import Table from '@material-ui/core/TableHead';
import TableHead from '@material-ui/core/TableHead';
import  TableBody  from '@material-ui/core/TableBody';
import  TableRow  from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import  Paper  from '@material-ui/core/Paper';

const styles =theme=>({
  root:{
    width:"100%",
    marginTop:theme.spacing.unit*3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})

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
}]
class App extends Component{
  render() {
    const{ classes }=this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customer.map(c=>{return(
              <Customer
                key={c.id}//map을 이용한 반복문을 사용할때는 key값을 설정해주어야 자바스크립트에서 오류를 출력하지않는다
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />)}
          )}
        </TableBody>
        </Table>
      </Paper>
    );
  }
}


export default withStyles(styles)(App);
