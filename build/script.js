function check(board,i,j,p){
  let r=(Math.floor(i/3))*3;
  let c=(Math.floor(j/3))*3;
  
  for(let k=r;k<r+3;k++){
      for(let l=c;l<c+3;l++){
         if(board[k][l]===p){
             return false;
         }
      }
  }
  for(let m=0;m<board.length;m++){
      if(board[m][j]===p){
          return false;
      }
  }
  for(let n=0;n<board.length;n++){
      if(board[i][n]===p){
          return false;
      }
  }
  return true;

}
function solve(board,tofill,cur){
  if(cur===tofill.length){
      return true;
  }

  let [i,j]=[tofill[cur][0],tofill[cur][1]];
  
 for(let p=0;p<10;p++){
     if(check(board,i,j,p)){
          board[i][j] =p;
          let a=solve(board, tofill,cur+1);
          if(a){
              return true;
          }
          board[i][j] =0;
     }
 }
}

function getBoard(){
  let a=document.querySelectorAll("input");
//   console.log(a[0].value)
  let board=[...Array(9)].map(e=>Array(9));
//   console.log(board)
  let r=0;
  let c=0;
  for(let i=0;i<a.length;i++){
        board[r][c]=+(a[i].value);
        c++;
        if(c===9){
            c=0;
            r++;
        }
  }

  let tofill=[];
  for(let i=0; i<board.length; i++) {
      for(let j=0; j<board.length; j++){
          if(board[i][j]===0){
              tofill.push([i,j]);
          }
      }
  }
  let possible=solve(board, tofill,0);
  if(possible){
      let k=0;
      for(let i=0;i<board.length;i++){
          console.log(board[i].join(" "));
          for(let j=0;j<board.length;j++){
              a[k].value=board[i][j];
              k++;
          }
      }
  }else{
      console.log(-1);
      alert("No solution found 😓")
  }

}
