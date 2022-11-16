let MAX = 100000;
 
    // Stores the number of moves
    // required to obtain respective
    // values from the given array
    let v = new Array(MAX).fill(0).map(()=>new Array());
 
    // Traverse the array
    for (let i = 0; i < n; i++) {
        let cnt = 0;
 
        // Insert 0 into V[arr[i]] as
        // it is the initial state
        v[arr[i]].push(0);
 
        while (arr[i] > 0) {
            arr[i] = Math.floor(arr[i] / d);
            cnt++;
 
            // Insert the moves required
            // to obtain current arr[i]
            v[arr[i]].push(cnt);
        }
    }
 
    let ans = Number.MAX_VALUE;
 
    // Traverse v[] to obtain
    // minimum count of moves
    for (let i = 0; i < MAX; i++) {
 
        // Check if there are at least
        // K equal elements for v[i]
        if (v[i].length >= threshold) {
 
            let move = 0;
 
            v[i].sort((a,b)=>a-b);
 
            // Add the sum of minimum K moves
            for (let j = 0; j < threshold; j++) {
 
                move += v[i][j];
            }
 
            // Update answer
            ans = Math.min(ans, move);
        }
    }
 
    // Return the final answer
    return ans;
}