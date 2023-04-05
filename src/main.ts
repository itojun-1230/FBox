export function repeat(num:number, action:any){
    for (let i = 0; i < num; i++) {
        action(i);
      }
}