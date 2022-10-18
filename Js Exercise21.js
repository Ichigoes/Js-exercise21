function godzillKong(input) {
    let budget = Number(input[0]);
    let statisti = Number(input[1]);
    let oblekloStatist = Number(input[2]);
    let dekor = 0.1 * budget

    if (statisti >= 150) {
        discount = 0.1 * oblekloStatist
        oblekloStatist -= discount
        finalPrice = oblekloStatist * statisti + dekor
    } else {
        finalPrice = oblekloStatist * statisti + dekor
    }


    if (finalPrice > budget) {
        neededMoney = budget - finalPrice
        console.log(`Not enough money! \nWingard needs ${Math.abs(neededMoney).toFixed(2)} leva more.`)
    } else {
        moneyLeft = finalPrice - budget
        console.log(`Action! \nWingard starts filming with ${Math.abs(moneyLeft).toFixed(2)} leva left.`)
    }
    
}

godzillKong(["20000", "120", "55.5"])