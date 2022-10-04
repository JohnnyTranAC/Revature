// 6/27 - 7/1/2022
// Q1: Walk on the Axis
//   There are N+1 lights. Lights are placed at (0, 0), (1, 0), (2, 0) ... (N, 0).
//   Initially all the lights are on. You want to turn off all of them one after one. You want to follow a special pattern in turning off the lights.
//   You will start at (0, 0). First, you walk to the right most light that is on, turn it off. Then you walk to the left most light that is on, turn it off.
//   Then again to the right most light that is on and so on. You will stop after turning off all lights.
//   You want to know how much distance you walked in the process. Note that distance between (a,0) and (b,0) is |a-b|.

function findDist(T, N) {
    var result = new Array(T);
    
    for (let i=0; i<T; i++) {
        // Create axis of lights
        var lightAxis = [];
        for (let j=0; j<=N[i]; j++) {
            lightAxis.push(j);
        }
        // Initial movement from leftmost (0, 0) to rightmost light (N, 0)
        result[i] = Math.abs(lightAxis[0] - lightAxis[lightAxis.length-1]);
        
        var moveLeft = 1;
        while (lightAxis.length > 1) {
            // Calculate distance when moving from one side to another
            // Then remove that light from the axis
            if (moveLeft == 1) {
                result[i] += lightAxis[lightAxis.length-1] - lightAxis[0];
                lightAxis.pop();
            } else {
                result[i] += Math.abs(lightAxis[0] - lightAxis[lightAxis.length-1]);
                lightAxis.shift();
            }
        }
    }
    
    return result.join('\n');
}

// INPUT
var T = 2;
var N = [1, 2];

// OUTPUT
console.log(findDist(T, N));
