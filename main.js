function exercise1() {
    let num = prompt("Nhập số nguyên dương: ");
    num = parseInt(num);

    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    alert(`Số ước số của ${num} là ${count}`);
}

function exercise2() {
        let result = [];
        for (let i = 2000; i <= 3200; i++) {
            if (i % 7 === 0 && i % 5!== 0) {
                result.push(i);
            }
        }
        alert(result.join(','));
    }

function exercise3() {
        let product = 1;
        while (true) {
            let num = prompt("Nhập số thực: ");
            num = parseFloat(num);
    
            if (num > 0) {
                product *= num;
            } else if (num < 0) {
                continue;
            } else {
                break;
            }
        }
    
        alert(`Tích của các số nhập vào là ${product}`);
    }

function exercise4() {
        // Let's assume the number of rabbits is x and the number of chickens is y
        // We know that the total number of heads is 35, so x + y = 35
        // We also know that the total number of legs is 94, and each rabbit has 4 legs and each chicken has 2 legs, so 4x + 2y = 94
      
        // We can solve this system of linear equations using substitution or elimination
        // Let's use substitution
      
        // Rearrange the first equation to isolate y: y = 35 - x
        // Substitute this into the second equation: 4x + 2(35 - x) = 94
        // Simplify: 4x + 70 - 2x = 94
        // Simplify further: 2x = 24
        // Solve for x: x = 12
      
        // Now that we have x, we can find y: y = 35 - x = 35 - 12 = 23
      
        // So, there are 12 rabbits and 23 chickens
        alert(`There are 12 rabbits and 23 chickens.`);
      }
      
      solvePuzzle();
