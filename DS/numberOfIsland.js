//An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

//Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

let arr =[["1","1","1","1","0"],
          ["1","1","0","1","0"],
          ["1","1","0","0","0"],
          ["0","0","0","0","0"]]

function checkAllVisisted(arr,x,y,r,c) {
    if(x<0 || y< 0|| x>=r || y>=c || arr[x][y]!=="1"){
        return;
    }
    arr[x][y] ="visited";
    checkAllVisisted(arr,x+1,y,r,c);
    checkAllVisisted(arr,x-1,y,r,c);
    checkAllVisisted(arr,x,y+1,r,c);
    checkAllVisisted(arr,x,y-1,r,c);
}


function island(arr){
    let noofI =0, r=arr.length, c = arr[0].length;
    for(let i =0; i < r; i++){
        for(let j=0; j < c; j++) {
            if(arr[i][j] ==="1"){
                console.log("called");
                checkAllVisisted(arr,i,j,r,c);
                noofI+=1;
            }
        }
    }
    console.log("noOfI:  ",arr, noofI);
}

island(arr);